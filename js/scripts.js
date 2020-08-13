$(document).ready(function() {
  $("#formAnything").submit(function(event) {
    const animal = $("#animal").val();
    console.log(animal);

    if (animal === "snake") {
        $(".snake").show();
        $(".opposum").hide();
        $(".badger").hide();
        $(".wolverine").hide();


    } else if (animal === "wolverine") {
        $(".wolverine").show();
        $(".opposum").hide();
        $(".badger").hide();
        $(".snake").hide();


      } else if (animal === "badger") {
        $(".badger").show();
        $(".opposum").hide();
        $(".snake").hide();
        $(".wolverine").hide();


      } else if (animal === "opossum") {
        $(".opossum").show();
        $(".snake").hide();
        $(".badger").hide();
        $(".wolverine").hide();

      } else {
        $(".opposum").hide();
        $(".badger").hide();
        $(".wolverine").hide();
        $(".badger").hide();
      }
      event.preventDefault();
    })
});
