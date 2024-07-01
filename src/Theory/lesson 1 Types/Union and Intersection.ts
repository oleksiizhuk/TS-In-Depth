
// Union Types
function padLeft(value: string, padding: string | number) {
    // ...
}


// Intersection Types
interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}
interface ArtistsData {
    artists: { name: string }[];
}

type ArtistsResponse = ArtistsData & ErrorHandling;
const handleArtistsResponse = (response: ArtistsResponse) => {
    if (response.error) {
        console.error(response.error.message);
        return;
    }

    console.log(response.artists);
};
