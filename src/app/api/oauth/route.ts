export async function GET(req) {
  console.log('GET /users/oauth/google')
  return Response.redirect('http://localhost:3000')
}