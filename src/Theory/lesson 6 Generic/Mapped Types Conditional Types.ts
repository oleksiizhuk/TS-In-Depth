
type ToBooleanIfPK<Type> = {
    [property in keyof Type]: Type[property] extends { pk: true } ? true : false;
};

type ObjType = {
    id: { format: 'incrementing'; pk: true };
    name: { type: string };
};

type ObjBooleanType = ToBooleanIfPK<ObjType>;

// Type ObjBooleanType = {
//  id: true;
//  name: false;
// }
