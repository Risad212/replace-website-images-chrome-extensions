const willSmithImage = [
    "https://images.gr-assets.com/authors/1485793957p8/484064.jpg",
    "https://themebucket.net/wp-content/uploads/2020/07/h2-596x1024.jpg",
    "https://media-exp2.licdn.com/dms/image/C510BAQFXkisqWCIvFQ/company-logo_200_200/0/1535226750426?e=1665619200&v=beta&t=0DGxwWnciL4xkEKG220LlfhRUUZLk5u_QFLqPGRn250",
]


const imgs = document.getElementsByTagName('img');

for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * willSmithImage.length);
    imgs[i].src = willSmithImage[randomImg];
}