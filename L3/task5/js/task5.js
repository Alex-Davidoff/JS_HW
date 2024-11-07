let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write("<ul>");
for (let c = 0; c<listOfItems.length; c++){
    document.write("<li>"+listOfItems[c]+"</li>");
}
document.write("</ul>");