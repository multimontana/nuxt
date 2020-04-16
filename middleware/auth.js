export default function ({store, redirect}) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + 'token' + "=");
  let token = parts.pop().split(";").shift()
  if (!token) {
    redirect('/?message=login')
  }

}
