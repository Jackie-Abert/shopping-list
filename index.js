$(function() {
  $('#js-shopping-list-form').submit(event => {
    //prevent form from resetting
    event.preventDefault();
    //create variables for form imput and controls because that is what will be returned on the form
    const item = $(this).find(
    'input[name="shopping-list-entry"]').val();
    const button = $(this).find(
    ".shopping-item-controls").html();
    if(!item){
        alert("Please Add Item")
        return;
        };
    //append item to unordered list as list item in a div container in order to keep the same style as the page.

    $("ul").append(`<li>
    <span class = "shopping-item">${item}</span>
    <div class = "shopping-item-controls">
    <button class="shopping-item-toggle">
    <span class="button-label"> check </span>
    </button>
    <button class="shopping-item-delete">
    <span class="button-label"> delete </span>
    </button>
    </div>
    </li>`) 
    });
        //on click for shopping item toggle for strike through, create function event that changes closest list item to button to .toggle class
    $('.shopping-list').on('click','.shopping-item-toggle', event => {
      const checkItem = $(event.currentTarget).closest("li");
      checkItem.find(".shopping-item").toggleClass('shopping-item__checked');
    });
        //on click for shopping item delete, create function event that changes iten closest to list item to delete button
    $('.shopping-list').on('click','.shopping-item-delete', event => {
      const deleteItem = $(event.currentTarget).closest("li");
      deleteItem.remove();
    });
  });