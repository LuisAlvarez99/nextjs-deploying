import { NextResponse } from 'next/server';
import {
  projects as fallbackProjects,
  mapGitHubRepoToProject,
  Project,
} from '../../data/projects';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const res = await fetch(
      'https://api.github.com/users/LuisAlvarez99/repos?sort=pushed&per_page=100',
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      // Return fallback projects if GitHub rate-limits or returns error
      return NextResponse.json(fallbackProjects);
    }

    const repos: Array<{
      name: string;
      description: string | null;
      html_url: string;
      homepage: string | null;
      created_at: string;
      pushed_at: string;
      language: string | null;
      topics?: string[];
      archived?: boolean;
    }> = await res.json();

    const fetchedProjects = repos.map(mapGitHubRepoToProject);

    // Merge any special creative projects that don't have separate GitHub repos (e.g. synthwave-audio)
    const existingIds = new Set(fetchedProjects.map((p) => p.id));
    const nonRepoProjects = fallbackProjects.filter((p) => !existingIds.has(p.id));

    const allProjects: Project[] = [...fetchedProjects, ...nonRepoProjects].sort(
      (a, b) => b.date.localeCompare(a.date)
    );

    return NextResponse.json(allProjects);
  } catch {
    return NextResponse.json(fallbackProjects);
  }
}
