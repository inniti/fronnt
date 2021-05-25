import { DocumentNode } from 'graphql';
import combinedBaseSchema from '../schema/index.graphql';

const typeDefs: DocumentNode | string = combinedBaseSchema;

export default typeDefs;
