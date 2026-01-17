// additional-types.d.ts (Root folder)
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}