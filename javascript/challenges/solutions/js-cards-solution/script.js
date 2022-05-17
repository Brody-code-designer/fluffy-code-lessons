// Question: Iterate over the array below using foreach, map, or reduce and create a bootstrap card for each object and display the cards on the DOM.

// Copy the array from the question and assign it to a variable.
const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        "userId": 1,
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
        "userId": 1,
        "id": 7,
        "title": "magnam facilis autem",
        "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
        "userId": 1,
        "id": 8,
        "title": "dolorem dolore est ipsam",
        "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
        "userId": 1,
        "id": 9,
        "title": "nesciunt iure omnis dolorem tempora et accusantium",
        "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
        "userId": 1,
        "id": 10,
        "title": "optio molestias id quia eum",
        "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    }
]


// foreach method

// Find the HTML element with our desired ID.
const targetForEach = document.getElementById("target-foreach");

// Function that builds our bootstrap cards.
function setTagsWithForEach (posts) {

    // Declare a variable that will hold our cards.
    let accumulator = '';

    // Construct a callback variable for our forEach.
    const forEachCallback = post => {

        // Add the HTML for our item to our HTML placeholder accumulator.
        accumulator = accumulator +
            `
                <div class="card">
                    <div class="card-header">
                        ${post.title}
                    </div>
                    <div class="card-body">
                        ${post.body}
                    </div>
                </div>
            `
    }

    // Call our forEach variable on the posts array.
    posts.forEach(forEachCallback);
    return accumulator;
}

// Set our HTML element to the function results.
targetForEach.innerHTML = setTagsWithForEach(posts);




// map method

// Get our HTML element.
const targetMap = document.getElementById("target-map");

// Declare a function to use map to loop over our array.
function setTagsWithMap (posts) {

    // Declare a callback that we are going to use to map our array.
    const mapCallback = (post) => {
        post =
            `
                <div class="card">
                    <div class="card-header">
                        ${post.title}
                    </div>
                    <div class="card-body">
                        ${post.body}
                    </div>
                </div>
            `;
        return post;
    }

    // Call our callback variable using map.
    const cards = posts.map(mapCallback);
    return cards;
}

// Call our map function.
// Use .join(" ") to override default comma separator.
targetMap.innerHTML = setTagsWithMap(posts).join(" ");
