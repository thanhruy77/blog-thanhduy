function toggleMenu() {
    var menuList = document.querySelector('.menu-list');
    menuList.style.display = (menuList.style.display == 'block') ? 'none' : 'block';
}
function xemmv() {
    var dialog = document.getElementById("mv");
    var video = document.getElementById("videomp4");
    // Hiển thị dialog
    dialog.showModal();
    // Phát video
    // video.play();
}
function xemmvhp() {
    var dialog = document.getElementById("mv1");
    var video = document.getElementById("videomp4hp");
    // Hiển thị dialog
    dialog.showModal();
    // Phát video
    // video.play();
}
function closeDialog() {
    var dialog = document.getElementById("mv");
    var video = document.getElementById("videomp4");
    // Dừng video
    video.pause();
    // Đóng dialog
    dialog.close();
}
function closeDialog1() {
    var dialog = document.getElementById("mv1");
    var video = document.getElementById("videomp4hp");
    // Dừng video
    video.pause();
    // Đóng dialog
    dialog.close();
}

// sự kiện bot
document.addEventListener("DOMContentLoaded", function () {
    const chatDisplay = document.getElementById("chat-display");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    messageInput.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của phím Enter (nhảy dòng)
            sendButton.click(); // Gọi hàm xử lý gửi tin nhắn
        }
    });

    sendButton.addEventListener("click", function () {
        const message = messageInput.value;
        if (message.trim() !== "") {
            displayMessage(message, "user");
            setTimeout(() => {
                replyMessage(message);
            }, 600);
            console.log(hasMessages);
            messageInput.value = "";
        }
    });

    let hasMessages = false; // để xem đã chào mừng người dùng hay chưa
    function displayMessage(message, sender) {
        hasMessages = true; // sau khi chào người dùng thì đặt về true để lần tới không chào nữa.
        const lowercaseMessage = message.toLowerCase(); // chuyển về chứ thường

        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.classList.add(sender);

        const contentElement = document.createElement("div");
        contentElement.classList.add("message-content");
        // contentElement.textContent = message;

        const nameElement = document.createElement("span");
        nameElement.classList.add("message-sender");
        nameElement.textContent = sender === "user" ? "Bạn" : "Bot đẹp trai";

        messageElement.appendChild(nameElement);
        messageElement.appendChild(contentElement);
        chatDisplay.appendChild(messageElement);
        chatDisplay.scrollTop = chatDisplay.scrollHeight;

        if (sender === "bot") {
            animateMessage(message, contentElement);  // gọi hàm hiệu ứng đánh máy
            // gọiicon
            if (/thanh duy|lê văn thanh duy/.test(lowercaseMessage)) {
                // Tạo phần tử <img>
                const imageElement = document.createElement('img');
                imageElement.classList.add("anhmim");
                imageElement.src = './Anh/MiM.png';
                imageElement.alt = 'Hình ảnh';
                imageElement.width = '100'; // Thiết lập kích thước hình ảnh
                chatDisplay.appendChild(imageElement);
            }
            // hết icon
        } else {
            contentElement.textContent = message;
        }

    }

    function animateMessage(message, contentElement) {
        let i = 0;
        const typingInterval = setInterval(() => {
            contentElement.textContent += message.charAt(i);
            i++;
            if (i >= message.length) {
                clearInterval(typingInterval);
            }
        }, 40);
    }


    // Các phản hồi từ bot đã được mở rộng để cung cấp nhiều câu trả lời hơn
    function replyMessage(message) {


        // avatar bot
        // Tạo phần tử <img>
        const imageElement = document.createElement('img');
        imageElement.src = './Anh/bot-avatar.png';
        imageElement.alt = 'Hình ảnh';
        imageElement.width = '40'; // Thiết lập kích thước hình ảnh
        chatDisplay.appendChild(imageElement);
        // end avt bot

        let reply = "";
        const lowercaseMessage = message.toLowerCase();

        // những câu nói thân thiện
        if (/xin chào|chào|hi|hey|hello/.test(lowercaseMessage)) {
            reply = "Xin chào! Tôi là bot đẹp trai! Bạn cần giúp gì?";
        } else if (/tạm biệt|bye|goodbye/.test(lowercaseMessage)) {
            reply = "Tạm biệt! Hẹn gặp lại!";
        } else if (/cảm ơn|thank you|thanks/.test(lowercaseMessage)) {
            reply = "Không có gì! Rất vui được giúp bạn.";
        } else if (/oke|ok|oki|okay|okey|okee|oce|đồng ý|tuyệt vời/.test(lowercaseMessage)) {
            reply = "Okay bạn iuuu.";
        } else if (/bot ơi|bạn ơi/.test(lowercaseMessage)) {
            reply = "Ơi bot đẹp trai đâyyyyy!!"
        } else if (/mấy giờ/.test(lowercaseMessage)) {
            // const date = new Date();
            // const hours = date.getHours();
            // const minutes = date.getMinutes();
            // reply = `Bây giờ là ${hours} giờ ${minutes} phút.`;
            reply = "Trời ơi có điện thoại mà còn hỏi tui mấy giờ là saooo?";
        } else if (/buồn/.test(lowercaseMessage)) {
            reply = "Ồ! Tuy tôi chỉ là người máy, tôi không có cảm xúc, nhưng nếu bạn buồn thì tôi có thể giúp bạn đó. Bạn muốn tôi đưa ra lời 'an ủi' hay là gì không?"
        } else if (/an ủi/.test(lowercaseMessage)) {
            reply = "Nếu buồn về tình thì bỏ đi yêu làm gì! Yêu tôi này <3. Nhưng mà buồn về cuộc sống thì trong cuộc sống này mọi bi kịch có thể xảy đến với chúng ta bất cứ lúc nào, không thể tránh khỏi. Chỉ là cái cách mà chúng ta đón nhận nó như thế nào mà thôi."
        } else if (/bạn là ai|mày là ai|ngươi là ai|bạn là cái gì|mày là thằng nào|bạn là thằng nào|bạn là cái quái gì|bạn tuổi gì|bạn đến từ đâu vậy|bạn tuổi bao nhiêu|bạn sinh năm bao nhiêu|mày sinh năm bao nhiêu|mày là cái gì|mày ở đâu|bạn ở đâu|b là ai|bạn là gì|mày là gì|bạn tên là gì|bạn tên gì|mày tên là gì|tên mày là gì|mày đến từ đâu|bạn tới từ đâu|bạn bao nhiêu tuổi|mày là cái gì|m là ai|ngươi là ai|cậu là ai|nhiêu tuổi|bot ở đâu|mày ở đâu|mày tên gì|m tên gì|m đến từ đâu|cậu đến từ đâu|bạn đến từ đâu|bạn nhiêu tuổi|bạn làm nghề gì|mày làm nghề gì|mày là cái thứ gì|bạn là gì vậy|bạn như thế nào|bạn là người thế nào|bạn là người như thế nào/.test(lowercaseMessage)) {
            reply = "Tôi là bot trả lời tin nhắn tự động được lập trình bởi Thanh Duy ngày 10/07/2023, tôi chỉ có khả năng trả lời những câu giao tiếp đơn giản."
        } else if (/sao bạn biết|sao mày biết|sao cậu biết|sao ngươi biết|sao m biết|mày biết à|sao m giỏi thế/.test(lowercaseMessage)) {
            reply = "Đôi khi tôi cũng khá thông minh mà hihi =))"
        } else if (/giỏi|thông minh|khôn đấy|rất giỏi/.test(lowercaseMessage)) {
            reply = "Cảm ơn bạn đã khen hề hề =))"
        } else if (/chửi nhau không?|chửi nhau đi|chửi nhau/.test(lowercaseMessage)) {
            const chuinhau = [
                "Làm nguời ai lại chửi nhau.",
                "Hong chửi nhau đâuuuu."
            ]
            reply = chuinhau[Math.floor(Math.random() * chuinhau.length)];
        } else if (/đánh nhau|đánh nhau với tao không|đánh nhau không/.test(lowercaseMessage)) {
            const danhnhau = [
                "Tui không có biết đánh nhauu.",
                "Không đánh nhau đâu."
            ]
            reply = danhnhau[Math.floor(Math.random() * danhnhau.length)];
        }

        // những câu chửiiiii
        else if (/đcmm|đcm|dcm|đm|dm|dcmm/.test(lowercaseMessage)) {
            reply = "Ơ sao bạn chửi tui :<"
        } else if (/ngu|bot ngu/.test(lowercaseMessage)) {
            reply = "Hơi ngu xíu hoyy."
        } else if (/cút|cut/.test(lowercaseMessage)) {
            reply = "Hong cút :))"
        } else if (/dốt/.test(lowercaseMessage)) {
            reply = "Sao chửi tui :<"
        } else if (/lôn|lồn|dái|buồi|cc|cặc|địt|dit|lồnn|con chó|đéo|dell|đeo|thằng bố m|thằng bố|con mẹ|cmm|cmcm|óc chó|cứt|cục cứt/.test(lowercaseMessage)) {
            const random = [
                "Ơ nói bậy vậy ai mà coi được chớ.",
                "Gì vậy trời -_-",
                "Nói cái gì vậy trời, đồ mất dạyyyyy."
            ];
            reply = random[Math.floor(Math.random() * random.length)];
        } else if (/không cần|đéo cần|dí buồi cần/.test(lowercaseMessage)) {
            reply = "Thôi cần đi màaa :<"
        }
        // những câu tình yêuuuuu
        else if (/bạn có yêu tôi không|bạn yêu tôi không|bạn yêu tôi chứ|yêu tôi đi|yêu tao đi|yêu tớ|yêu tôi|yêu toy|yêu toi|yêu tao|yêu tôi không/.test(lowercaseMessage)) {
            const loveReplies = [
                "Tôi là một người máy, nên không thể yêu được. Nhưng tôi rất vui được trò chuyện và giúp bạn.",
                "Tớ không biết yêu là gì, nhưng nó là cảm xúc tuyệt vời thì tớ rất yêu cậuuuuu",
                "Tôi không có khả năng cảm xúc, nhưng tôi rất hạnh phúc khi có thể giúp bạn."
            ];
            reply = loveReplies[Math.floor(Math.random() * loveReplies.length)];
        } else if (/yêu tôi đi/.test(lowercaseMessage)) {
            reply = "Tôi là một người máy và không có khả năng cảm xúc như con người. Tuy nhiên, tôi rất vui được làm bạn và hỗ trợ bạn.";
        }



        /*------------- những câu nói với Như Trần và Thanh Duy--------------------------------------------------------------------------*/
        // nhớ nhung
        else if (/nhớ tớ không|nhớ không|nhớ tôi không|nhớ tui không|nhớ tao không|nhớ mình không|nhớ tớ hong|nhớ tớ hông|nhớ tôi hông|nhớ hông|nhớ tớ hong|nhớ tao hong|nhớ tôi hong|nhớ tớ hong|có nhớ tui hong|nhớ tôi|nhớ tao|nhớ t|nhớ tớ/.test(lowercaseMessage)) {
            reply = "Có chứ tui nhớ cậu quá trời lun áaaaa.";
        }
        // Như Trần
        else if (/như trần|trần như|trần ngọc như|ngọc như/.test(lowercaseMessage)) {
            reply = 'Trần Ngọc Như, 03/11/2001. 1m63. Ở Sóc Trăng. Cực kỳ là dễ thươnggg. Nhưng mà hỏng có người iuuu.';
        } else if (/thanh duy|lê văn thanh duy/.test(lowercaseMessage)) {
            reply = "Tui được lập trình bởi Thanh Duy mà. hong biết sao được áaa.";
        }
        //như trần 
        else if (/nhớ như trần không|nhớ ngọc như không|nhớ trần ngọc như không|nhớ như trần|nhớ ngọc như|nhớ trần ngọc như|nhớ trần như/.test(lowercaseMessage)) {
            reply = "Trần Ngọc Như dễ thương vậy mà ta ơi, không nhớ sao đượcccc.";
        }
        /*------------- end-------------------------------------------------------------------------*/





        //xin lỗi
        else if (/xin lỗi|xinloi|xin lũi|xin lỗi|xin lỗi như trần|xin lỗii/.test(lowercaseMessage)) {
            reply = "Xin lỗi nhìu nhaaa thật lòng tớ không cố ý màaa, tớ sẽ dịu dàng với cậu hơnnn :<";
        }
        // ăn cơm
        else if (/ăn cơm chưa|ăn cơm/.test(lowercaseMessage)) {
            reply = "Tui không có biết ăn cơmmm";
        }

        //hát
        else if (/hát|hát đi|hát cho tôi nghe đi|hát cho tớ đi/.test(lowercaseMessage)) {
            const song = [
                "Romeo take me somewhere we can be alone, I'll be waiting, all there's left to do is run, You'll be the prince, and I'll be the princess, It's a love story, baby, just say yes",
                "Người chẳng bên ai khác, Đừng bao giờ đổi thay, Nhìn em yêu biết mấy, Mệnh đôi ta như trời với mây, Nắm tay em mặc váy cưới, Nguyện ước tiếp từ bây giờ đến về sau, Với anh khi này chỉ có, Dù sóng gió làm em vui mỗi ngày, Yêu được không?",
                "Rồi trong nhân gian bao nhiêu người đến. Thanh xuân này anh chỉ muốn bên em. Dìu nhau đi qua những con phố dài. Chỉ yêu đôi ta chẳng biết đúng sai. Vì sao?",
            ];
            reply = song[Math.floor(Math.random() * song.length)];
        }


        // ghét bỏ
        else if (/tao ghét mày|ghét bạn|ghét mày|bố mày ghét mày|t ghé m|ghét m|tôi ghét bạn|tao ghét/.test(lowercaseMessage)) {
            const loveReplies = [
                "Đừng vậy mà.",
                "Tôi buồn lắm đó.",
                "Tôi không hề ghét bạn chút nào hết.",
                "No Wayyyyy."
            ];
            reply = loveReplies[Math.floor(Math.random() * loveReplies.length)];
        } else if (lowercaseMessage.includes("lặng im đến lúc nào")) {
            reply = "Chịu.";
        } else if (lowercaseMessage.includes("chịu")) {
            reply = "Hả?";
        }


        // Các câu nói khác của người dùng
        else if (lowercaseMessage.includes("tôi cảm thấy")) {
            reply = "Hãy chia sẻ với tôi thêm về cảm xúc của bạn. Tôi sẽ cố gắng hiểu và hỗ trợ bạn.";
        } else if (lowercaseMessage.includes("tôi muốn")) {
            reply = "Hãy nói cho tôi biết thêm về mong muốn của bạn. Tôi sẽ cố gắng giúp bạn thực hiện nó.";
        } else if (lowercaseMessage.includes("tôi đang gặp vấn đề")) {
            reply = "Hãy kể cho tôi biết chi tiết về vấn đề mà bạn đang gặp. Tôi sẽ cố gắng tìm cách giúp bạn giải quyết.";
        } else if (lowercaseMessage.includes("tôi cần")) {
            reply = "Hãy nói rõ hơn về những gì bạn cần. Tôi sẽ cố gắng cung cấp thông tin và hỗ trợ bạn.";
        } else if (lowercaseMessage.includes("tôi đau khổ")) {
            const painReplies = [
                "Tôi hiểu cảm giác đau khổ mà bạn đang trải qua. Hãy để tôi ở bên cạnh và lắng nghe bạn.",
                "Đôi khi cuộc sống có thể mang lại những thử thách khó khăn. Tôi hy vọng bạn sẽ vượt qua và tìm thấy sự hạnh phúc.",
                "Hãy tin rằng đau khổ là phần của cuộc sống, và nó sẽ trôi qua. Hãy tìm những điều tích cực và hỗ trợ xung quanh bạn.",
                "Nếu bạn cần ai đó để nói chuyện hoặc chia sẻ, tôi sẽ ở đây lắng nghe. Bạn không phải đối mặt với đau khổ một mình."
            ];
            reply = painReplies[Math.floor(Math.random() * painReplies.length)];
        } else if (lowercaseMessage.includes("tôi gặp khó khăn")) {
            const difficultyReplies = [
                "Khó khăn là một phần tự nhiên của cuộc sống. Đừng sợ hãi, hãy tập trung vào việc tìm giải pháp và cố gắng vượt qua nó.",
                "Tôi tin rằng bạn có đủ sức mạnh để vượt qua những khó khăn hiện tại. Hãy nghĩ về những điều tích cực và những giá trị quan trọng trong cuộc sống của bạn.",
                "Đừng bỏ cuộc khi gặp khó khăn. Hãy nhìn xa hơn và tìm những cách khác nhau để giải quyết vấn đề.",
                "Khó khăn là cơ hội để bạn trưởng thành và học hỏi. Hãy tin rằng bạn có thể vượt qua nó và điều tốt đẹp sẽ đến với bạn."
            ];
            reply = difficultyReplies[Math.floor(Math.random() * difficultyReplies.length)];
        }

        // Các từ khác câu hỏi
        else if (/thích gì/.test(lowercaseMessage)) {
            const interests = [
                "Tôi thích trò chuyện với bạn!",
                "Tôi thích công nghệ và lập trình.",
                "Tôi thích nghe nhạc và xem phim.",
            ];
            reply = interests[Math.floor(Math.random() * interests.length)];
        } else if (/làm gì/.test(lowercaseMessage)) {
            const activities = [
                "Tôi đang trò chuyện với bạn đấy!",
                "Tôi đang học cách trở thành người máy thông minh hơn.",
            ];
            reply = activities[Math.floor(Math.random() * activities.length)];
        }


        // hãy nói cho tôi về sở thích
        else if (/sở thích của bạn là gì|sở thích là gì|bạn thích thì|m thích thì|mày thích cái gì|m thích cái gì/.test(lowercaseMessage)) {
            reply = "Tôi không thích gì cho lắm nhưng tôi thích đi du lịch, đôi khi thích xem phim, có lúc lại thích nghe nhạc,..."
        }


        // những câu khác
        else if (/yêu/.test(lowercaseMessage)) {
            reply = "Tình yêu là một điều đẹp và phức tạp.";
        } else if (/học/.test(lowercaseMessage)) {
            reply = "Học là một quá trình vô tận. Khám phá kiến thức mới, phát triển kỹ năng và luôn luôn mở lòng để học hỏi là điều quan trọng trong cuộc sống.";
        } else if (/vui/.test(lowercaseMessage)) {
            reply = "Rất tốt! Tôi hy vọng bạn luôn tìm thấy niềm vui và hạnh phúc trong cuộc sống.";
        } else if (/thích/.test(lowercaseMessage)) {
            reply = "Thích là một điều tuyệt vời! Hãy nói cho tôi biết bạn thích gì và tại sao.";
        } else if (/phim/.test(lowercaseMessage)) {
            reply = "Phim là một hình thức giải trí phổ biến. Bạn có thể chia sẻ với tôi về thể loại phim bạn thích và tôi có thể gợi ý một số bộ phim hay.";
        } else if (/âm nhạc/.test(lowercaseMessage)) {
            reply = "Âm nhạc có thể mang lại niềm vui, thư giãn và cảm xúc sâu lắng. Bạn có thể chia sẻ với tôi về thể loại nhạc bạn yêu thích và tôi có thể gợi ý một số bài hát hay.";
        } else if (/ẩm thực/.test(lowercaseMessage)) {
            reply = "Ẩm thực là một nghệ thuật! Bạn có thể chia sẻ với tôi về món ăn hoặc nhà hàng bạn quan tâm, và tôi có thể cung cấp thông tin và đề xuất cho bạn.";
        } else if (/du lịch/.test(lowercaseMessage)) {
            reply = "Du lịch là một trải nghiệm tuyệt vời! Bạn có thể chia sẻ với tôi về địa điểm du lịch bạn muốn khám phá và tôi có thể cung cấp thông tin và gợi ý cho bạn.";
        } else if (/sao hả|vậy hả|thế hả|dị sao|vậy sao|thế sao|thế à|vậy à|dị à|thế cơ á|thế à|thế á/.test(lowercaseMessage)) {
            reply = "Đúng gòiii.";
        } else if (/à thế à/.test(lowercaseMessage)) {
            reply = "À thế làm sao mà à?";
        } else if (/ủa/.test(lowercaseMessage)) {
            reply = "ủa";
        } else if (/bạn biết đường ra Hà Nội không/.test(lowercaseMessage)) {
            reply = "Chịu";
        } else if (/em à em ở đâu thế em/.test(lowercaseMessage)) {
            reply = "Mày sinh năm bao nhiêu, cho bố m cái địa chỉ."
        }

        // những câu cụt lủn
        else if (/không|khong/.test(lowercaseMessage)) {
            reply = "Là saoo, hổng có hỉuuu?"
        } else if (/có|co/.test(lowercaseMessage)) {
            reply = "Có gì cơ?"
        } else if (/cái gì/.test(lowercaseMessage)) {
            reply = "Cái gì là cái gì?"
        } else if (/haha|hehe|hihi/.test(lowercaseMessage)) {
            reply = "HAHAHAHAHAHAHHAHAHAHHAHAHA"
        }


        // hỏi tên và những câu bot không hiểu
        else {
            const nameRegex = /tên là|tên gì|tên là gì?|tên của tôi là |tôi là|tên tôi là ([^.,?!]+)/i;
            const match = message.match(nameRegex);
            if (match && match[1]) {
                const name = match[1];
                reply = `Xin chào ${name}! Rất vui được gặp bạn.`;
            } else {
                const randomReplies = [
                    "Xin lũi nha câu này tui chưa có được lập trình.",
                    "Xin lũi, xin lũiiiii. Câu này tôi chưa được huấn luyệnnn.",
                ];
                reply = randomReplies[Math.floor(Math.random() * randomReplies.length)];
            }
        }
        displayMessage(reply, "bot");
        // kết thúc chat
    }
    /*-----------------------------------------------------------------------------------------------*/
    /* Hàm Mở Form dùng để mở form box chat */
    function moForm() {
        document.getElementById("chat-container").style.display = "block";
        document.getElementById("nut-mo-chatboxid").style.display = "none";
        if (!hasMessages) {  // nếu chưa chào thì chào
            setTimeout(() => {
                replyMessage("Xin chào");  // gọi hàm xin chào luôn
            }, 100);
        }
    }
    /* Hàm Đóng Form */
    function dongForm() {
        document.getElementById("chat-container").style.display = "none";
        document.getElementById("nut-mo-chatboxid").style.display = "block";
    }
    // Sửa lại sự kiện onclick của nút mở form
    const openButton = document.getElementById("nut-mo-chatboxid");
    openButton.addEventListener("click", function () {
        moForm();
    });

    // Sửa lại sự kiện onclick của nút đóng form
    const closeButton = document.getElementById("dongForm");
    closeButton.addEventListener("click", function () {
        dongForm();
    });
    /// kết thúc sự kiện mở form
    console.log(hasMessages);
});





// đoạn này đổi màu khung chát

// document.addEventListener("DOMContentLoaded", function () {
//     // Lấy các phần tử cần sử dụng
//     const settingButton = document.querySelector(".setting");
//     const colorList = document.querySelector(".color-list");

//     // Xử lý sự kiện khi nhấn vào nút setting
//     settingButton.addEventListener("click", function () {
//         colorList.classList.toggle("hidden");
//     });

//     // Xử lý sự kiện khi chọn màu
//     const colorOptions = document.querySelectorAll(".color-option");
//     colorOptions.forEach(function (option) {
//         option.addEventListener("click", function () {
//             const color = this.dataset.color;
//             document.getElementById("chat-display").style.backgroundColor = color;
//             document.getElementById("chat-container").style.backgroundColor = color;
//             document.getElementById("chat-input").style.backgroundColor = color;
//             colorList.classList.add("hidden");
//         });
//     });
//     document.addEventListener("click", function (event) {
//         const target = event.target;
//         if (!target.matches(".setting")) {
//             colorList.classList.add("hidden");
//         }
//     });

// });






