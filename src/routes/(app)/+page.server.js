// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

// export const prerender = true;
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        a: 1,
        gains: [{
            title: "title 1 ",
            imageUrl: "https://dummyimage.com/640x360/ddd/aaa"
        },
        {
            title: "title 2",
            imageUrl: "https://dummyimage.com/640x360/ddd/aaa"
        },
         {
            title: "title 3",
            imageUrl: "https://dummyimage.com/640x360/ddd/aaa"
        },
         {
            title: "title 4",
            imageUrl: "https://dummyimage.com/640x360/ddd/aaa"
        }, 
        {
            title: "title 5",
            imageUrl: "https://dummyimage.com/640x360/ddd/aaa"
        },
         {
            title: "title 6",
            imageUrl: "https://dummyimage.com/640x360/ddd/aaa"
        }]
    };
}