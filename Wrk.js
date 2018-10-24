var studen1 = {
    rollNumber: '01',
    name: 'Dương Mịch',
    age: "20",
    phoneNumber: "***",
    address: "Trung Quốc",
    avatar: 'img/1.jpg',
};
var studen2 = {
    rollNumber: '02',
    name: 'Đường Yến',
    age: "20",
    phoneNumber: "***",
    address: "Trung Quốc",
    avatar : 'img/2.jpg',
};
var studen3 = {
    rollNumber: '03',
    name: 'Lưu Diệc Phi',
    age: "20",
    phoneNumber: "***",
    address: "Trung Quốc",
    avatar: 'img/3.jpg',
};
var studen4 = {
    rollNumber: '04',
    name: 'Phạm Băng Băng',
    age: "20",
    phoneNumber: "***",
    address: "Trung Quốc",
    avatar: 'img/4.jpg',
};
var studen5 = {
    rollNumber: '05',
    name: 'Angela baby',
    age: "20",
    phoneNumber: "***",
    address: "Trung Quốc",
    avatar: 'img/5.jpg',
};
var studen6 = {
    rollNumber: '06',
    name: 'Địch Lệ Nhiệt Ba',
    age: "20",
    phoneNumber: "***",
    address: "Trung Quốc",
    avatar: 'img/6.jpg',
};
var ListStuden = new Array();
ListStuden.push(studen1);
ListStuden.push(studen2);
ListStuden.push(studen3);
ListStuden.push(studen4);
ListStuden.push(studen5);
ListStuden.push(studen6);
for ( i = 0; i <ListStuden.length ; i++) {

}
 var classMainContent =document.getElementsByClassName("main-content");
if(classMainContent != null && classMainContent.length > 0){
    mainContent = classMainContent[0];
    for (var i = 0; i < ListStuden.length ; i++) {
        var itemContent = '<div class="personal-infor">';
        itemContent += '<div class="avatar" style="background-image: url(\''+ListStuden[i].avatar+'\'); background-size: cover">\n';
        itemContent += '</div>';
        itemContent += '<div class="line-infor">';
        itemContent += '<label>Rollnumber</label>';
        itemContent += '<div>' + ListStuden[i].rollNumber + '</div>';
        itemContent += '</div>';
        itemContent += '<div class="line-infor">';
        itemContent += '<label>Name</label>';
        itemContent += '<div>' + ListStuden[i].name + '</div>';
        itemContent += '</div>';
        itemContent += '<div class="line-infor">';
        itemContent += '<label>Phnone</label>';
        itemContent += '<div>' + ListStuden[i].phoneNumber + '</div>';
        itemContent += '</div>';
        itemContent += '<div class="line-infor">';
        itemContent += '<label>Address</label>';
        itemContent += '<div>' + ListStuden[i].address + '</div>';
        itemContent += '</div>';
        mainContent.innerHTML += itemContent;
    }
}
