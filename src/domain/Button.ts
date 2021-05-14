export default interface Button {
  label: string,
  redirectTo: string,
  targetRedirect: '_blank' | '_self',
  class: string,
  filter: string
}
