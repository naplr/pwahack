let db
export function initDB(initArticles) {
    var request = window.indexedDB.open("pwa-rder-db", 1)
        
    request.onerror = function(e) {
        console.log("db error: ")
    };
        
    request.onsuccess = function(e) {
        db = request.result;
        console.log("db success: "+ db)
        readAll(initArticles)
    };
        
    request.onupgradeneeded = function(event) {
        console.log("db upgrade needed")
        db = event.target.result
        var objectStore = db.createObjectStore("selectedArticles", { keyPath: "url" })
    }
}

function readAll(initArticles) {
    const objectStore = db.transaction("selectedArticles").objectStore("selectedArticles");
    const articles = []
    objectStore.openCursor().onsuccess = function(event) {
        const cursor = event.target.result
        if (cursor) {
            console.log(cursor.value)
            articles.push(cursor.value)
            cursor.continue()
        } else {
            console.log("No more entries!")
            initArticles(articles)
        }
    };
}

export function addSelectedArticle(article) {
    var request = db.transaction(["selectedArticles"], "readwrite")
        .objectStore("selectedArticles")
        .add(article);
            
    request.onsuccess = function(event) {
        console.log(`Added ${article.title}`)
    };
    
    request.onerror = function(event) {
        console.log(`Unable to add ${article.title}. It is aready exist in your database!`)
    }
}
         
export function removeSelectedArticle(article) {
    var request = db.transaction(["selectedArticles"], "readwrite")
        .objectStore("selectedArticles")
        .delete(article.url);
            
    request.onsuccess = function(event) {
        console.log(`${article.title} is removed.`);
    };
}

export default db