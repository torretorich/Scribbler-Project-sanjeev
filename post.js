const stringArr = new Array();
let flag = false;

// Edit Function
function edit() {
        
        if (flag==false) {
            document.getElementById('content').style.borderWidth = '2px';
            document.getElementById('content').style.borderStyle = 'solid';
            document.getElementById('content').style.borderColor = 'purple';
            document.getElementById('heading').style.borderWidth = '2px';
            document.getElementById('heading').style.borderStyle = 'solid';
            document.getElementById('heading').style.borderColor = 'pink';
            document.getElementById('editBtn').innerHTML ='Save<i class="fa fa-save" style="padding-left: 4px;"></i></button>';
            flag = true;
        }
        else {
            document.getElementById('content').style.border = 'none';
            document.getElementById('heading').style.border = 'none';
            document.getElementById('editBtn').innerHTML ='Edit<i class="fa fa-edit" style="padding-left: 4px;"></i>';
            var temp = document.getElementById('heading');
            document.getElementById('heading').innerHTML = `${temp.innerHTML}`;
            var temp = document.getElementById('content');
            document.getElementById('content').innerHTML = `${temp.innerHTML}`;
            flag=false;
        }
}

// Function to be called when user click edit button and to load all details of blog on the page
window.onload = function() {
        if (stringArr.length == 0) {
                if (window.location.search.split('?').length > 1) {
                        const params = window.location.search.split('?')[1].split('&');
                        for (let i = 0; i < params.length; i++) {
                                const key = params[i].split('=')[0];
                                const value = decodeURIComponent(params[i].split('=')[1]);
                                stringArr[key] = value;
                        }
                }
        }
        if (stringArr.heading != null && stringArr.author != null) {
                const { heading } = stringArr;
                const { author } = stringArr;
                const { content } = stringArr;
                document.getElementsByClassName('blogHeading')[0].innerHTML = heading;
                document.getElementsByClassName('blogAuthor')[0].innerHTML = author;
                document.getElementsByClassName('blogContent')[0].innerHTML = content;
        }
        document.getElementById('comments').style.visibility = 'hidden';
};

//Function that increament the likes
var countLikes = 0;
function likes() {
    countLikes +=1;
    const likeBtn = document.getElementById('likeBtn');
    likeBtn.innerHTML = 'Liked!';
    const val = document.getElementById('noOfLikes');
    val.innerHTML = countLikes+" people like this !";
}

//Function to add comments
function comments(comment) {
            if (comment.value !== '') {
                    document.getElementById('comments').style.visibility = 'visible';
                    var commentVal = comment.value;
                    var node = document.createElement("p");
                    var textnode = document.createTextNode(commentVal);
                    node.appendChild(textnode);
                    //document.getElementById("comments").appendChild(node);
                    
                    var list = document.getElementById("comments");
                    list.insertBefore(node, list.childNodes[0]);


                    document.getElementById('addComment').value = '';
            }
    }


