namespace MemberShip {
    export function addMemberShip(name: string) {

    }

    export namespace Cards {
        export function issueCard(memberNumber: number){

        }
    }

    export function privateFn() {

    }
}

// How TO Use Namespace

MemberShip.addMemberShip('Anna');
MemberShip.Cards.issueCard(1234);
// MemberShip.privateFn(); // ERROR
