const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
    {
      allProjectsJson {
        edges {
          node {
            title
            links
            tech
            coverImg {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }`
  );

  if (result.errors) {
    throw results.errors;
  }

  const projectItems = result.data.allProjectsJson.edges;
  const projectTemplate = path.resolve("./src/templates/project-detail.js");

  projectItems.forEach(project => {
    const slug = project.node.title.toLowerCase().split(' ').join('-').split('.').join('').split("’").join('');

    createPage({
      path: `/projects/${slug}`,
      component: projectTemplate,
      context: {
        title: project.node.title
      },
    });
  });
}
