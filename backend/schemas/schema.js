// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
// Then we give our schema to the builder and provide the result to Sanity
import hero from "./heroImages";
import achievements from "./work_achievements";
import specialProjects from "./special_projects";
import news from "./news";
import partners from "./partners";
import banners from "./banners";
import pages_hero from "./hero_Pages";
import project from "./project";
import langTitle from "./langTitle";
import langText from "./langText";
export default createSchema({
  // We name our schema
  name: "default",

  types: schemaTypes.concat([
    hero,
    achievements,
    specialProjects,
    news,
    partners,
    banners,
    pages_hero,
    project,
    langTitle,
    langText,
  ]),
});
