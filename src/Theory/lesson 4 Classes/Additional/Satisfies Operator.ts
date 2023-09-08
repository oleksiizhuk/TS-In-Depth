// type BookOrMagazine =
//   { kind: 'book'; title: string; author: string; pages: number  }
//   | { kind: 'magazine'; title: string };
//
//
// const obj10 = { title: 'book' } as BookOrMagazine;
//
// const obj11 = {  kind: 'magazine', title: '' } satisfies BookOrMagazine;


type personName = 'John' | 'Jack' | 'Justin';

type otherDetails = {
    id: number;
    age: number | boolean;
};

type personInfo = personName | otherDetails;


type NewPerson = {
    myInfo: personInfo;
    myOtherInfo: personInfo;
};

const applicant = {
    myInfo: 'John',
    myOtherInfo: { id: 123, age: true },
} satisfies NewPerson;

applicant.myInfo.toUpperCase();

// const applicant1 = {
//     myInfo: 'John',
//     myOtherInfo: { id: 123, age: true },
// } as NewPerson;
//
// applicant1.myInfo.toUpperCase(); TS2339: Property 'toUpperCase' does not exist on type 'personInfo'.

