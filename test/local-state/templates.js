export const data = {
  templates: []
};
  
const templatesApi = {};
  
var counter = 0;

templatesApi.add = (t) => {
  t.id = counter++;
  t.id = t.id.toString();
  data.templates.push(t);
  return t;
};

templatesApi.all = () => {
  return data.templates;
};

templatesApi.update = (template) => {
  const oldTemplate = data.templates.filter((t) => template.id === t.id);
  const templateIndex = data.templates.indexOf(oldTemplate[0]);
  data.templates[templateIndex] =template;
  return template;
};

templatesApi.delete = (id) => {
  data.templates = data.templates.filter((t) => id === t.id );
  return { message: "Success" };
};

templatesApi.getById = (id) => {
  console.log(id,data.templates[0].id);
  return data.templates.filter((t) => id === JSON.stringify(t.id) );
};

export default templatesApi;
  