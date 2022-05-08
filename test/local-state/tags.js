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
  t.id = counter++;
  data.tags.push(t);
  return t;
};

tagsApi.updateTag = (t) => {
  //
};

tagsApi.deleteTag = (id) => {
  //
};

export default tagsApi;