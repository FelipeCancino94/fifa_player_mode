// pages/api/invalidate-cache.js

export default async function clearCache(req, res) {
    const token = process.env.VERCEL_API_TOKEN;
    const projectId = process.env.VERCEL_PROJECT_ID;
  
    if (!token || !projectId) {
      return res.status(400).json({ error: 'Missing API token or project ID' });
    }
  
    const response = await fetch(`https://api.vercel.com/v9/projects/${projectId}/cache`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  
    if (response) {
      return 'Cache cleaned successfully';
    } else {
      return 'Error in claned cache';
    }
  }
  