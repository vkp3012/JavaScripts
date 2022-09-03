
console.log("-------------Q 1------------------------------");
// 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and "Apples."
let list = ["Milk","Bread","Apples"]
//2. Check your list length in the console.
console.log(list.length);
//3. Update "Bread" to "Bananas."
list[1] = "Banamas"
// 4. Output your entire list to the console.
console.log(list);




console.log("-------------Q 2------------------------------");

// 1. Create an empty array to use as a shopping list.
let list1 = [];

// 2. Add Milk, Bread, and Apples to your list.
list1.push("Milk","Bread","Apples")
console.log(list1);

// 3. Update "Bread" with Bananas and Eggs.
list1.splice(1,1,"Bananas","Eggs")
console.log(list1);


// 4. Remove the last item from the array and output it into the console.
let removelist = list1.pop();
console.log(removelist);

// 5. Sort the list alphabetically.
console.log(list1.sort());

// 6. Find and output the index value of Milk.
console.log(list1.indexOf("Milk"));

// 7. After Bananas, add Carrots and Lettuce.
list1.splice(1,0,"Carrots","Lettuce")
console.log(list1);


// 8. Create a new list containing Juice and Pop.
let list2 = ["Juice","Pop"];


// 9. Combine both lists, adding the new list twice to the end of the first list.
let finalList = list1.concat(list2,list2);
console.log(finalList);

// 10. Get the last index value of Pop and output it to the console.

console.log(finalList.lastIndexOf("Pop"));


// 11. Your final list should look like this:
//     ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", "Pop", "Juice", "Pop"]

console.log(finalList);
