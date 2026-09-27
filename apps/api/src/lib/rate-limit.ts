const buckets = new Map<string, { count: number; resetAt: number }>();

/**
 * In-memory limit for a single server instance.
 * TODO: replace with a shared store before running more than one instance.
 */
export function allowRequest(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const current = buckets.get(key);

  if (!current || now > current.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (current.count >= limit) {
    return false;
  }

  current.count += 1;
  return true;
}
