const data = {
  tags: []
};

const tagsApi = {};

/**
 * For assigning unique id to tags
 */
var counter = 0;

tagsApi.all = () => {
  return data.tags;
};

tagsApi.add = (t) => {
  t.id = (counter++).toString();
  data.tags.push(t);
  return t;
};

tagsApi.getById = (id) => {
  return data.tags.find(t => t.id === id);
};

tagsApi.update = (t) => {
  var index = data.tags.findIndex(x => x.id === t.id);
  data.tags[index] = t;
  return t;
};

tagsApi.delete = (id) => {
  data.tags = data.tags.filter(x => x.id !== id);
  return { message: "Success" };
};

export default tagsApi;