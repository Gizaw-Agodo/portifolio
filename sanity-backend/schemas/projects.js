export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "githubLink",
      title: "GitubLink",
      type: "string",
    },
    {
      name: "demoLink",
      title: "DemoLink",
      type: "string",
    },
    {
      name: "imgurl",
      title: "ImgUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    
  ],
};
