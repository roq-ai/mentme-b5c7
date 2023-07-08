const mapping: Record<string, string> = {
  feedbacks: 'feedback',
  organizations: 'organization',
  profiles: 'profile',
  requests: 'request',
  sessions: 'session',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
