$(document).ready(function(){
    $("#loadingImage").hide();
    $("#testjson").click(function(e){
        console.log("In button");
        startJsonSession();
        return false;
    });

    $(document).on('click', '.close', function(){
        $('.temp').attr('id',this.id);
        $('#myModal').modal('show');
    });

    $(document).on('click' , '#delete' , function(){
        var id = $('.temp').attr('id');
        $("#"+id).remove();
    });

    function startJsonSession(){
        $('#loadingImage').show();
        $.ajax({
          type: 'GET',
          url: 'https://jsonplaceholder.typicode.com/posts',
            cache: false,
            dataType: "json",
            success: function(data) {
                console.log(data);
                $("#loadingImage").hide();
                $("#click").hide();
                var i;
                for (i = 0; i < 20; ++i) {
                    var post = "<div id='" + data[i]["id"] + "'class='panel panel-primary'>                       <div class='panel-heading'> <h3 class='panel-title'>" + data[i]["title"]+" <span class='text-right pull-right'><button type='button' class='close test' id='"+data[i]["id"]+"' aria-label='Close'><span aria-hidden='true'>&times;</span></button></span></h3></div><div class='panel-body'>"+data[i]["body"]+"</div><br/>";
                    $("#post").append(post);
                }
            },
            error: function (jqXHR, exception) {
                $("#loadingImage").hide();
                console.log(jqXHR);
                $("#post").append("<h3>No Internet Connection</h3>");
                // Your error handling logic here..
            }
        });
    }
});
