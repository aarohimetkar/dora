$(document).ready(function () {
  // Click event for items in list1
  $("#list1 li").click(function () {
    // Clone the clicked item and append it to list2
    $("#list2").append($(this).clone());

    // Remove the item from list1
    $(this).remove();
  });
});
