// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import work from "./work";
import bio from "./bio";
import press from "./press";
import workshop from "./workshop";
import performance from "./performance";
import materials from "./materials";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    work,
    bio,
    press,
    workshop,
    performance,
    materials,
  ]),
});
