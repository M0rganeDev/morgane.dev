export async function handle({ event, resolve }) {
  const response = await resolve(event);

  // Only handle the 404 error here
  if (response.status === 404) {
    return new Response(null, {
      status: 302,
      headers: { Location: '/404' },
    });
  }

  return response;
}

export function handleError({ error, event }) {
  // Optionally log the error or handle it differently
  console.error('An error occurred:', error);

  // Return the error, which will be used in the $error.svelte page if needed
  return {
    status: error.status || 500,
    message: error.message || 'Internal Server Error',
  };
}
