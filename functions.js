var m1 = document.querySelector("#m1");
var s1 = document.querySelector("#s1");
var s2 = document.querySelector("#s2");
var option = document.querySelector("select");


// // Insert screen selector
// function paragraph(){
//     document.querySelector("#element") = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos! Ipsum soluta temporibus ex placeat impedit eius molestias officiis quaerat voluptates ipsam, fugit perferendis, ab ea debitis porro sapiente voluptatibus?</p>";;
// }

// document.querySelector("#placeholder").childElementCount;

// <select name="element" id="element">
//                 <option value="m1">M1</option>
//                 <option value="s1">S1</option>
//                 <option value="s2">S2</option>
//             </select>

// Specify which screen you'd like to change
function selectScreen(){
    if(option.selectedIndex == 0){
        selectedOption = document.querySelector(".main");
    } else if(option.selectedIndex == 1){
        selectedOption = document.querySelector(".secondary:nth-of-type(2)");
    } else if(option.selectedIndex == 2){
        selectedOption = document.querySelector(".secondary:nth-of-type(3)");
    }
    return selectedOption;
}

// Insert a paragraph
function paragraph(){
    selectScreen().innerHTML = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos! Ipsum soluta temporibus ex placeat impedit eius molestias officiis quaerat voluptates ipsam, fugit perferendis, ab ea debitis porro sapiente voluptatibus?</p>";;
}

// Insert image
function image(){
    selectScreen().innerHTML = `<div class="screen_image"></div>`;
}

// Insert a list
function list(){
    selectScreen().innerHTML = `
    <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ul>`;
}

// Insert a fill colour
function fill(){
    selectScreen().innerHTML = '<div class="screen_fill"></div>';
}

// Insert a dropdown menu
function dropdown(){
    selectScreen().innerHTML = `
    <select>
        <option value="Option one">Option one</option>
        <option value="Option two">Option two</option>
        <option value="Option three">Option three</option>
    </select>`;
}

// Reset to screen id number
function reset(){
    selectScreen().innerHTML = option.selectedIndex;
}

// one_main_50_right_two_secondary_50_left
function one_main_50_right_two_secondary_50_left(){
    document.querySelector("#placeholder").innerHTML = `
        <div id="screen" class="main full_height fifty_width right">0</div>
        <div id="screen" class="secondary fifty_height fifty_width top left">1</div>
        <div id="screen" class="secondary fifty_height fifty_width bottom left">1</div>
    `
}

// one_main_70_left_one_secondary_30_right
function one_main_70_left_one_30_secondary_right(){
    document.querySelector("#placeholder").innerHTML = `
        <div id="screen" class="main full_height seventy_width left">0</div>
        <div id="screen" class="secondary full_height thirty_width right">1</div>
    `
}

// one_main_70_top_one_secondary_30_bottom
function one_main_70_top_one_30_secondary_bottom(){
    document.querySelector("#placeholder").innerHTML = `
        <div id="screen" class="main full_width seventy_height top">0</div>
        <div id="screen" class="secondary full_width thirty_height bottom">1</div>
    `
}

// one_main_50_top_two_secondary_50_bottom
function one_main_50_top_two_secondary_50_bottom(){
    document.querySelector("#placeholder").innerHTML = `
        <div id="screen" class="main full_width fifty_height top">0</div>
        <div id="screen" class="secondary fifty_width bottom left">1</div>
        <div id="screen" class="secondary fifty_width bottom right">1</div>
    `
}