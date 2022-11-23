export const data = {
  activeTemplates: []
};
  
const activeTemplateApi = {};
  
var counter = 0;

activeTemplateApi.add = (t) => {
  t.id = counter++;
  t.id = t.id.toString();
  data.activeTemplates.push(t);
  return t;
};

activeTemplateApi.all = () => {
  return data.activeTemplates;
};

activeTemplateApi.update = (at) => {
  const index = data.activeTemplates.findIndex(t => t.id = at.id);
  // index should never be -1
  data.activeTemplates[index] = at;
  return at;
};

activeTemplateApi.delete = (id) => {
  data.activeTemplates = data.activeTemplates.filter((t) => id === t.id );
  return { message: "Success" };
};

activeTemplateApi.getById = (id) => {
  return data.activeTemplates.find(t => t.id === id);
};

export default activeTemplateApi;
  