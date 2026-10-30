const QUESTION_BANK = [
    {
        id: 1,
        question: "Triết học Mác – Lênin là gì?",
        options: [
            {
                label: "A",
                text: "Hệ thống tri thức nghiên cứu riêng về giới tự nhiên.",
                correct: false,
            },
            {
                label: "B",
                text: "Hệ thống quan điểm lý luận chung nhất về thế giới và vị trí, vai trò của con người trong thế giới.",
                correct: true,
            },
            {
                label: "C",
                text: "Hệ thống tri thức nghiên cứu riêng về xã hội loài người.",
                correct: false,
            },
            {
                label: "D",
                text: "Hệ thống các quy tắc điều chỉnh hành vi đạo đức của con người.",
                correct: false,
            },
        ],
    },
    {
        id: 2,
        question: "Vấn đề cơ bản của triết học là vấn đề nào?",
        options: [
            {
                label: "A",
                text: "Mối quan hệ giữa cá nhân và xã hội.",
                correct: false,
            },
            {
                label: "B",
                text: "Mối quan hệ giữa lý luận và thực tiễn.",
                correct: false,
            },
            {
                label: "C",
                text: "Mối quan hệ giữa vật chất và ý thức.",
                correct: true,
            },
            {
                label: "D",
                text: "Mối quan hệ giữa con người và tự nhiên.",
                correct: false,
            },
        ],
    },
    {
        id: 3,
        question:
            "Theo quan điểm của chủ nghĩa duy vật biện chứng, vật chất là gì?",
        options: [
            {
                label: "A",
                text: "Sản phẩm do ý thức của con người tạo ra.",
                correct: false,
            },
            {
                label: "B",
                text: "Tổng hợp những cảm giác của con người.",
                correct: false,
            },
            {
                label: "C",
                text: "Những sự vật có thể trực tiếp quan sát bằng giác quan.",
                correct: false,
            },
            {
                label: "D",
                text: "Thực tại khách quan tồn tại độc lập với ý thức và được ý thức phản ánh.",
                correct: true,
            },
        ],
    },
    {
        id: 4,
        question:
            "Theo chủ nghĩa duy vật biện chứng, ý thức có nguồn gốc từ đâu?",
        options: [
            {
                label: "A",
                text: "Nguồn gốc tự nhiên và nguồn gốc xã hội.",
                correct: true,
            },
            {
                label: "B",
                text: "Chỉ từ hoạt động của bộ não con người.",
                correct: false,
            },
            {
                label: "C",
                text: "Chỉ từ quá trình lao động sản xuất.",
                correct: false,
            },
            {
                label: "D",
                text: "Từ một lực lượng tinh thần tồn tại độc lập với vật chất.",
                correct: false,
            },
        ],
    },
    {
        id: 5,
        question:
            "Mối quan hệ giữa vật chất và ý thức được chủ nghĩa duy vật biện chứng giải quyết như thế nào?",
        options: [
            {
                label: "A",
                text: "Ý thức quyết định hoàn toàn sự tồn tại của vật chất.",
                correct: false,
            },
            {
                label: "B",
                text: "Vật chất và ý thức tồn tại độc lập, không liên hệ với nhau.",
                correct: false,
            },
            {
                label: "C",
                text: "Vật chất quyết định ý thức; ý thức có tính độc lập tương đối và tác động trở lại vật chất thông qua hoạt động thực tiễn của con người.",
                correct: true,
            },
            {
                label: "D",
                text: "Vật chất và ý thức có vai trò quyết định ngang nhau trong mọi trường hợp.",
                correct: false,
            },
        ],
    },
    {
        id: 6,
        question: "Phép biện chứng duy vật nghiên cứu vấn đề gì?",
        options: [
            {
                label: "A",
                text: "Những quy luật riêng của tư duy logic hình thức.",
                correct: false,
            },
            {
                label: "B",
                text: "Những mối liên hệ phổ biến và những quy luật vận động, phát triển chung nhất của tự nhiên, xã hội và tư duy.",
                correct: true,
            },
            {
                label: "C",
                text: "Những quy tắc tổ chức và quản lý xã hội.",
                correct: false,
            },
            {
                label: "D",
                text: "Những hiện tượng tồn tại biệt lập, không có mối liên hệ với nhau.",
                correct: false,
            },
        ],
    },
    {
        id: 7,
        question:
            "Theo quan điểm của phép biện chứng duy vật, phát triển là quá trình như thế nào?",
        options: [
            {
                label: "A",
                text: "Vận động theo vòng tròn khép kín, không có sự biến đổi về chất.",
                correct: false,
            },
            {
                label: "B",
                text: "Biến đổi theo hướng bất kỳ, không có khuynh hướng chung.",
                correct: false,
            },
            {
                label: "C",
                text: "Chỉ là sự tăng lên về số lượng của sự vật.",
                correct: false,
            },
            {
                label: "D",
                text: "Vận động theo khuynh hướng từ thấp đến cao, từ đơn giản đến phức tạp.",
                correct: true,
            },
        ],
    },
    {
        id: 8,
        question:
            "Quy luật nào chỉ ra cách thức chung của sự phát triển thông qua sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại?",
        options: [
            {
                label: "A",
                text: "Quy luật chuyển hóa từ những thay đổi về lượng thành những thay đổi về chất và ngược lại.",
                correct: true,
            },
            {
                label: "B",
                text: "Quy luật thống nhất và đấu tranh của các mặt đối lập.",
                correct: false,
            },
            {
                label: "C",
                text: "Quy luật phủ định của phủ định.",
                correct: false,
            },
            {
                label: "D",
                text: "Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất.",
                correct: false,
            },
        ],
    },
    {
        id: 9,
        question:
            "Theo quy luật thống nhất và đấu tranh của các mặt đối lập, nguồn gốc và động lực cơ bản của sự vận động, phát triển là gì?",
        options: [
            {
                label: "A",
                text: "Sự tác động của các yếu tố bên ngoài.",
                correct: false,
            },
            {
                label: "B",
                text: "Sự thay đổi ngẫu nhiên của các sự vật.",
                correct: false,
            },
            {
                label: "C",
                text: "Mâu thuẫn và sự đấu tranh giữa các mặt đối lập trong bản thân sự vật, hiện tượng.",
                correct: true,
            },
            {
                label: "D",
                text: "Sự tác động đơn phương của một mặt đối lập.",
                correct: false,
            },
        ],
    },
    {
        id: 10,
        question:
            "Quy luật phủ định của phủ định phản ánh khuynh hướng phát triển cơ bản nào?",
        options: [
            {
                label: "A",
                text: "Phát triển theo đường thẳng, không có sự kế thừa.",
                correct: false,
            },
            {
                label: "B",
                text: "Phát triển theo đường xoáy ốc, có sự kế thừa và lặp lại tương đối những yếu tố cũ trên cơ sở mới.",
                correct: true,
            },
            {
                label: "C",
                text: "Phát triển theo vòng tròn khép kín, quay về nguyên trạng ban đầu.",
                correct: false,
            },
            {
                label: "D",
                text: "Phát triển hoàn toàn ngẫu nhiên, không có khuynh hướng.",
                correct: false,
            },
        ],
    },
    {
        id: 11,
        question:
            "Theo chủ nghĩa duy vật biện chứng, thực tiễn có vai trò như thế nào đối với nhận thức?",
        options: [
            {
                label: "A",
                text: "Chỉ là kết quả cuối cùng của nhận thức.",
                correct: false,
            },
            {
                label: "B",
                text: "Chỉ có vai trò kiểm tra nhận thức sau khi nhận thức hoàn thành.",
                correct: false,
            },
            {
                label: "C",
                text: "Không có vai trò đối với quá trình hình thành nhận thức.",
                correct: false,
            },
            {
                label: "D",
                text: "Là cơ sở, động lực, mục đích của nhận thức và là tiêu chuẩn kiểm tra chân lý.",
                correct: true,
            },
        ],
    },
    {
        id: 12,
        question:
            "Nguyên tắc toàn diện trong nhận thức và hoạt động thực tiễn yêu cầu điều gì?",
        options: [
            {
                label: "A",
                text: "Xem xét sự vật trong tổng thể các mối liên hệ, đồng thời xác định những mối liên hệ chủ yếu, bản chất.",
                correct: true,
            },
            {
                label: "B",
                text: "Chỉ tập trung vào một yếu tố nổi bật của sự vật.",
                correct: false,
            },
            {
                label: "C",
                text: "Xem xét sự vật tách rời khỏi điều kiện và hoàn cảnh cụ thể.",
                correct: false,
            },
            {
                label: "D",
                text: "Đánh giá sự vật chủ yếu dựa vào biểu hiện bên ngoài.",
                correct: false,
            },
        ],
    },
    {
        id: 13,
        question:
            "Theo quan điểm duy vật lịch sử, yếu tố nào giữ vai trò quyết định đối với sự vận động và phát triển của xã hội trong xét đến cùng?",
        options: [
            {
                label: "A",
                text: "Ý chí chủ quan của các cá nhân lãnh đạo.",
                correct: false,
            },
            {
                label: "B",
                text: "Những tư tưởng và quan niệm đạo đức.",
                correct: false,
            },
            {
                label: "C",
                text: "Phương thức sản xuất vật chất của xã hội.",
                correct: true,
            },
            {
                label: "D",
                text: "Những phong tục, tập quán truyền thống.",
                correct: false,
            },
        ],
    },
    {
        id: 14,
        question:
            "Theo quan điểm của chủ nghĩa duy vật lịch sử, mối quan hệ giữa lực lượng sản xuất và quan hệ sản xuất được hiểu như thế nào?",
        options: [
            {
                label: "A",
                text: "Quan hệ sản xuất luôn quyết định hoàn toàn lực lượng sản xuất.",
                correct: false,
            },
            {
                label: "B",
                text: "Lực lượng sản xuất quyết định quan hệ sản xuất; quan hệ sản xuất tác động trở lại lực lượng sản xuất.",
                correct: true,
            },
            {
                label: "C",
                text: "Lực lượng sản xuất và quan hệ sản xuất tồn tại độc lập với nhau.",
                correct: false,
            },
            {
                label: "D",
                text: "Hai yếu tố này không có mối liên hệ trong quá trình sản xuất.",
                correct: false,
            },
        ],
    },
    {
        id: 15,
        question:
            "Đối tượng nghiên cứu của Kinh tế chính trị Mác – Lênin là gì?",
        options: [
            {
                label: "A",
                text: "Các hoạt động trao đổi hàng hóa trên thị trường.",
                correct: false,
            },
            {
                label: "B",
                text: "Các quan hệ xã hội giữa người với người trong sản xuất và trao đổi, đặt trong mối liên hệ với lực lượng sản xuất và kiến trúc thượng tầng tương ứng.",
                correct: true,
            },
            {
                label: "C",
                text: "Quá trình phân phối thu nhập của các doanh nghiệp.",
                correct: false,
            },
            {
                label: "D",
                text: "Các hoạt động quản lý tài chính và tiền tệ của Nhà nước.",
                correct: false,
            },
        ],
    },
    {
        id: 16,
        question:
            "Theo lý luận giá trị của C. Mác, lượng giá trị của hàng hóa được đo bằng yếu tố nào?",
        options: [
            {
                label: "A",
                text: "Thời gian lao động cá biệt của người sản xuất hàng hóa.",
                correct: false,
            },
            {
                label: "B",
                text: "Mức giá bán hàng hóa trên thị trường.",
                correct: false,
            },
            {
                label: "C",
                text: "Thời gian lao động xã hội cần thiết để sản xuất ra hàng hóa.",
                correct: true,
            },
            {
                label: "D",
                text: "Mức độ khan hiếm của hàng hóa trên thị trường.",
                correct: false,
            },
        ],
    },
    {
        id: 17,
        question: "Hai thuộc tính cơ bản của hàng hóa là gì?",
        options: [
            {
                label: "A",
                text: "Giá trị sử dụng và giá trị.",
                correct: true,
            },
            {
                label: "B",
                text: "Giá trị trao đổi và giá cả.",
                correct: false,
            },
            {
                label: "C",
                text: "Công dụng và giá cả.",
                correct: false,
            },
            {
                label: "D",
                text: "Giá trị và lợi nhuận.",
                correct: false,
            },
        ],
    },
    {
        id: 18,
        question: "Theo C. Mác, giá trị thặng dư là gì?",
        options: [
            {
                label: "A",
                text: "Phần giá trị do máy móc và thiết bị tạo ra.",
                correct: false,
            },
            {
                label: "B",
                text: "Toàn bộ số tiền thu được từ việc bán hàng hóa.",
                correct: false,
            },
            {
                label: "C",
                text: "Khoản thu nhập có được do giá bán hàng hóa cao hơn giá trị của nó.",
                correct: false,
            },
            {
                label: "D",
                text: "Phần giá trị mới do người lao động làm thuê tạo ra vượt quá giá trị sức lao động và bị nhà tư bản chiếm hữu.",
                correct: true,
            },
        ],
    },
    {
        id: 19,
        question: "Bản chất của tiền lương trong chủ nghĩa tư bản là gì?",
        options: [
            {
                label: "A",
                text: "Giá cả của toàn bộ lao động mà người công nhân đã thực hiện.",
                correct: false,
            },
            {
                label: "B",
                text: "Giá cả của hàng hóa sức lao động.",
                correct: true,
            },
            {
                label: "C",
                text: "Toàn bộ giá trị mới do người lao động tạo ra.",
                correct: false,
            },
            {
                label: "D",
                text: "Phần giá trị thặng dư được chia cho người lao động.",
                correct: false,
            },
        ],
    },
    {
        id: 20,
        question:
            "Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam được xác định là nền kinh tế như thế nào?",
        options: [
            {
                label: "A",
                text: "Nền kinh tế vận hành hoàn toàn theo cơ chế thị trường, không có sự quản lý của Nhà nước.",
                correct: false,
            },
            {
                label: "B",
                text: "Nền kinh tế chỉ tồn tại một hình thức sở hữu và một thành phần kinh tế.",
                correct: false,
            },
            {
                label: "C",
                text: "Nền kinh tế thị trường hiện đại, hội nhập quốc tế, vận hành đầy đủ, đồng bộ theo các quy luật của kinh tế thị trường, có sự quản lý của Nhà nước pháp quyền xã hội chủ nghĩa, dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.",
                correct: true,
            },
            {
                label: "D",
                text: "Nền kinh tế trong đó Nhà nước quyết định trực tiếp mọi hoạt động sản xuất, kinh doanh.",
                correct: false,
            },
        ],
    },
    {
        id: 21,
        question: "Chủ nghĩa xã hội khoa học nghiên cứu vấn đề cơ bản nào?",
        options: [
            {
                label: "A",
                text: "Những quy luật tự nhiên chi phối sự vận động của thế giới vật chất.",
                correct: false,
            },
            {
                label: "B",
                text: "Những quy luật kinh tế của phương thức sản xuất tư bản chủ nghĩa.",
                correct: false,
            },
            {
                label: "C",
                text: "Những quy luật chính trị – xã hội của quá trình hình thành, phát triển hình thái kinh tế – xã hội cộng sản chủ nghĩa và con đường thực hiện hình thái đó.",
                correct: true,
            },
            {
                label: "D",
                text: "Những quy luật hình thành và phát triển của các nền văn hóa dân tộc.",
                correct: false,
            },
        ],
    },
    {
        id: 22,
        question:
            "Theo quan điểm của chủ nghĩa Mác – Lênin, giai cấp công nhân có sứ mệnh lịch sử là gì?",
        options: [
            {
                label: "A",
                text: "Xóa bỏ chế độ tư hữu tư bản chủ nghĩa, xóa bỏ chế độ người bóc lột người và xây dựng chủ nghĩa xã hội, chủ nghĩa cộng sản.",
                correct: true,
            },
            {
                label: "B",
                text: "Duy trì và phát triển chế độ tư bản chủ nghĩa.",
                correct: false,
            },
            {
                label: "C",
                text: "Thay thế giai cấp tư sản bằng một giai cấp bóc lột mới.",
                correct: false,
            },
            {
                label: "D",
                text: "Chỉ đấu tranh nhằm cải thiện tiền lương và điều kiện lao động.",
                correct: false,
            },
        ],
    },
    {
        id: 23,
        question:
            "Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân là gì?",
        options: [
            {
                label: "A",
                text: "Giai cấp công nhân có số lượng đông nhất trong xã hội.",
                correct: false,
            },
            {
                label: "B",
                text: "Giai cấp công nhân có trình độ học vấn cao hơn tất cả các giai cấp khác.",
                correct: false,
            },
            {
                label: "C",
                text: "Giai cấp công nhân nắm giữ toàn bộ tư liệu sản xuất của xã hội.",
                correct: false,
            },
            {
                label: "D",
                text: "Địa vị kinh tế – xã hội của giai cấp công nhân trong nền sản xuất công nghiệp hiện đại và những đặc điểm chính trị – xã hội của giai cấp này.",
                correct: true,
            },
        ],
    },
    {
        id: 24,
        question:
            "Đảng Cộng sản ra đời là kết quả của sự kết hợp giữa những yếu tố nào theo quan điểm của chủ nghĩa Mác – Lênin?",
        options: [
            {
                label: "A",
                text: "Chủ nghĩa xã hội không tưởng và phong trào nông dân.",
                correct: false,
            },
            {
                label: "B",
                text: "Chủ nghĩa Mác – Lênin với phong trào công nhân.",
                correct: true,
            },
            {
                label: "C",
                text: "Phong trào công nhân với phong trào tư sản.",
                correct: false,
            },
            {
                label: "D",
                text: "Phong trào yêu nước với phong trào tiểu tư sản.",
                correct: false,
            },
        ],
    },
    {
        id: 25,
        question:
            "Theo chủ nghĩa Mác – Lênin, thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
        options: [
            {
                label: "A",
                text: "Thời kỳ chủ nghĩa tư bản đã phát triển hoàn thiện.",
                correct: false,
            },
            {
                label: "B",
                text: "Thời kỳ xã hội không còn tồn tại những khác biệt về kinh tế và xã hội.",
                correct: false,
            },
            {
                label: "C",
                text: "Thời kỳ cải biến cách mạng sâu sắc, toàn diện từ xã hội cũ sang xã hội xã hội chủ nghĩa, với sự tồn tại đan xen của những yếu tố cũ và mới.",
                correct: true,
            },
            {
                label: "D",
                text: "Thời kỳ chỉ tập trung phát triển kinh tế, chưa cần xây dựng các lĩnh vực chính trị và văn hóa.",
                correct: false,
            },
        ],
    },
    {
        id: 26,
        question:
            "Đặc trưng cơ bản về kinh tế của chủ nghĩa xã hội theo quan điểm của chủ nghĩa Mác – Lênin là gì?",
        options: [
            {
                label: "A",
                text: "Có lực lượng sản xuất phát triển cao, chế độ công hữu về những tư liệu sản xuất chủ yếu được thiết lập phù hợp với trình độ phát triển của lực lượng sản xuất.",
                correct: true,
            },
            {
                label: "B",
                text: "Duy trì chế độ tư hữu tư bản chủ nghĩa đối với toàn bộ tư liệu sản xuất.",
                correct: false,
            },
            {
                label: "C",
                text: "Xóa bỏ mọi hình thức phân phối thu nhập ngay từ đầu.",
                correct: false,
            },
            {
                label: "D",
                text: "Không cần phát triển lực lượng sản xuất vì đã thay đổi chế độ chính trị.",
                correct: false,
            },
        ],
    },
    {
        id: 27,
        question: "Dân chủ xã hội chủ nghĩa có bản chất cơ bản như thế nào?",
        options: [
            {
                label: "A",
                text: "Là nền dân chủ chỉ bảo đảm quyền lợi cho một nhóm người trong xã hội.",
                correct: false,
            },
            {
                label: "B",
                text: "Là nền dân chủ chỉ thực hiện quyền làm chủ trong lĩnh vực kinh tế.",
                correct: false,
            },
            {
                label: "C",
                text: "Là nền dân chủ không cần pháp luật và kỷ cương xã hội.",
                correct: false,
            },
            {
                label: "D",
                text: "Là nền dân chủ mang bản chất giai cấp công nhân, có tính nhân dân rộng rãi và tính dân tộc sâu sắc.",
                correct: true,
            },
        ],
    },
    {
        id: 28,
        question: "Nhà nước xã hội chủ nghĩa có chức năng cơ bản nào?",
        options: [
            {
                label: "A",
                text: "Chỉ thực hiện chức năng quản lý kinh tế.",
                correct: false,
            },
            {
                label: "B",
                text: "Tổ chức xây dựng xã hội mới và bảo vệ thành quả cách mạng, bảo đảm quyền làm chủ của nhân dân.",
                correct: true,
            },
            {
                label: "C",
                text: "Bảo vệ lợi ích riêng của giai cấp tư sản.",
                correct: false,
            },
            {
                label: "D",
                text: "Thay thế hoàn toàn vai trò của các tổ chức chính trị – xã hội.",
                correct: false,
            },
        ],
    },
    {
        id: 29,
        question:
            "Theo chủ nghĩa Mác – Lênin, cơ sở kinh tế – xã hội quan trọng của liên minh giữa giai cấp công nhân với giai cấp nông dân và các tầng lớp lao động khác trong thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
        options: [
            {
                label: "A",
                text: "Sự giống nhau hoàn toàn về nghề nghiệp và thu nhập.",
                correct: false,
            },
            {
                label: "B",
                text: "Việc xóa bỏ mọi sự khác biệt giữa các giai cấp và tầng lớp.",
                correct: false,
            },
            {
                label: "C",
                text: "Những lợi ích cơ bản thống nhất, gắn bó với yêu cầu xây dựng chủ nghĩa xã hội và sự phát triển của nền sản xuất xã hội.",
                correct: true,
            },
            {
                label: "D",
                text: "Việc các giai cấp và tầng lớp có vị trí kinh tế giống hệt nhau.",
                correct: false,
            },
        ],
    },
    {
        id: 30,
        question:
            "Cơ cấu xã hội – giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội có đặc điểm nào?",
        options: [
            {
                label: "A",
                text: "Tồn tại nhiều giai cấp, tầng lớp với vị trí, vai trò và lợi ích vừa có sự khác biệt, vừa có sự thống nhất và chuyển biến trong quá trình phát triển.",
                correct: true,
            },
            {
                label: "B",
                text: "Chỉ còn duy nhất giai cấp công nhân.",
                correct: false,
            },
            {
                label: "C",
                text: "Không còn sự khác biệt về lợi ích giữa các giai cấp, tầng lớp.",
                correct: false,
            },
            {
                label: "D",
                text: "Các giai cấp, tầng lớp tồn tại biệt lập và không có quan hệ với nhau.",
                correct: false,
            },
        ],
    },
    {
        id: 31,
        question:
            "Theo quan điểm của chủ nghĩa Mác – Lênin, bản chất của vấn đề dân tộc trong thời đại hiện nay được thể hiện tập trung ở nội dung nào?",
        options: [
            {
                label: "A",
                text: "Chỉ là vấn đề ngôn ngữ và phong tục tập quán.",
                correct: false,
            },
            {
                label: "B",
                text: "Chỉ là vấn đề phát triển kinh tế giữa các quốc gia.",
                correct: false,
            },
            {
                label: "C",
                text: "Chỉ là vấn đề xác lập đường biên giới lãnh thổ.",
                correct: false,
            },
            {
                label: "D",
                text: "Quan hệ giữa các cộng đồng dân tộc, quyền bình đẳng dân tộc, quyền tự quyết dân tộc và sự đoàn kết, liên hiệp giữa giai cấp công nhân các dân tộc.",
                correct: true,
            },
        ],
    },
    {
        id: 32,
        question: "Tư tưởng Hồ Chí Minh là gì?",
        options: [
            {
                label: "A",
                text: "Hệ thống quan điểm về đạo đức và lối sống của con người Việt Nam.",
                correct: false,
            },
            {
                label: "B",
                text: "Hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam, là kết quả của sự vận dụng và phát triển sáng tạo chủ nghĩa Mác – Lênin vào điều kiện cụ thể của Việt Nam.",
                correct: true,
            },
            {
                label: "C",
                text: "Hệ thống các quan điểm chỉ đề cập đến cuộc đấu tranh giành độc lập dân tộc.",
                correct: false,
            },
            {
                label: "D",
                text: "Hệ thống lý luận chỉ nghiên cứu về xây dựng Đảng Cộng sản Việt Nam.",
                correct: false,
            },
        ],
    },
    {
        id: 33,
        question:
            "Nguồn gốc lý luận quyết định bước phát triển về chất của tư tưởng Hồ Chí Minh là gì?",
        options: [
            {
                label: "A",
                text: "Chủ nghĩa Tam dân của Tôn Trung Sơn.",
                correct: false,
            },
            {
                label: "B",
                text: "Tinh hoa văn hóa phương Đông.",
                correct: false,
            },
            {
                label: "C",
                text: "Tinh hoa văn hóa phương Tây.",
                correct: false,
            },
            {
                label: "D",
                text: "Chủ nghĩa Mác – Lênin.",
                correct: true,
            },
        ],
    },
    {
        id: 34,
        question:
            "Theo tư tưởng Hồ Chí Minh, mối quan hệ giữa độc lập dân tộc và chủ nghĩa xã hội được xác định như thế nào?",
        options: [
            {
                label: "A",
                text: "Độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
                correct: true,
            },
            {
                label: "B",
                text: "Độc lập dân tộc là mục tiêu duy nhất, không cần xây dựng chủ nghĩa xã hội.",
                correct: false,
            },
            {
                label: "C",
                text: "Xây dựng chủ nghĩa xã hội phải hoàn thành trước khi giành độc lập dân tộc.",
                correct: false,
            },
            {
                label: "D",
                text: "Độc lập dân tộc và chủ nghĩa xã hội là hai mục tiêu hoàn toàn tách biệt.",
                correct: false,
            },
        ],
    },
    {
        id: 35,
        question:
            "Theo tư tưởng Hồ Chí Minh, lực lượng nào là gốc của cách mạng?",
        options: [
            {
                label: "A",
                text: "Đội ngũ trí thức.",
                correct: false,
            },
            {
                label: "B",
                text: "Giai cấp công nhân.",
                correct: false,
            },
            {
                label: "C",
                text: "Nhân dân.",
                correct: true,
            },
            {
                label: "D",
                text: "Đội ngũ cán bộ lãnh đạo.",
                correct: false,
            },
        ],
    },
    {
        id: 36,
        question:
            "Theo tư tưởng Hồ Chí Minh, bản chất của Nhà nước Việt Nam là gì?",
        options: [
            {
                label: "A",
                text: "Nhà nước chỉ đại diện cho lợi ích của một nhóm người trong xã hội.",
                correct: false,
            },
            {
                label: "B",
                text: "Nhà nước của nhân dân, do nhân dân, vì nhân dân.",
                correct: true,
            },
            {
                label: "C",
                text: "Nhà nước đứng ngoài mọi hoạt động của nhân dân.",
                correct: false,
            },
            {
                label: "D",
                text: "Nhà nước chỉ thực hiện chức năng quản lý kinh tế.",
                correct: false,
            },
        ],
    },
    {
        id: 37,
        question:
            "Theo tư tưởng Hồ Chí Minh, nguyên tắc tổ chức và hoạt động cơ bản của Đảng Cộng sản Việt Nam là gì?",
        options: [
            {
                label: "A",
                text: "Tập trung quyền lực tuyệt đối vào cá nhân người đứng đầu.",
                correct: false,
            },
            {
                label: "B",
                text: "Thực hiện tự do, tùy tiện trong sinh hoạt Đảng.",
                correct: false,
            },
            {
                label: "C",
                text: "Chỉ coi trọng vai trò của cá nhân, không cần phát huy trí tuệ tập thể.",
                correct: false,
            },
            {
                label: "D",
                text: "Tập trung dân chủ.",
                correct: true,
            },
        ],
    },
    {
        id: 38,
        question:
            "Theo tư tưởng Hồ Chí Minh, phẩm chất đạo đức nào thể hiện sự tận tụy phục vụ Tổ quốc, phục vụ nhân dân, đặt lợi ích chung lên trên lợi ích cá nhân?",
        options: [
            {
                label: "A",
                text: "Trung với nước, hiếu với dân.",
                correct: true,
            },
            {
                label: "B",
                text: "Cần, kiệm, liêm, chính.",
                correct: false,
            },
            {
                label: "C",
                text: "Khiêm tốn, giản dị.",
                correct: false,
            },
            {
                label: "D",
                text: "Tinh thần quốc tế trong sáng.",
                correct: false,
            },
        ],
    },
    {
        id: 39,
        question:
            "Theo tư tưởng Hồ Chí Minh, nguyên tắc cơ bản trong xây dựng đạo đức cách mạng là gì?",
        options: [
            {
                label: "A",
                text: "Chỉ chú trọng giáo dục đạo đức bằng lý thuyết.",
                correct: false,
            },
            {
                label: "B",
                text: "Đề cao lời nói hơn hành động thực tế.",
                correct: false,
            },
            {
                label: "C",
                text: "Nói đi đôi với làm, nêu gương về đạo đức.",
                correct: true,
            },
            {
                label: "D",
                text: "Chỉ yêu cầu người khác rèn luyện đạo đức.",
                correct: false,
            },
        ],
    },
    {
        id: 40,
        question:
            "Theo tư tưởng Hồ Chí Minh, đại đoàn kết toàn dân tộc có vai trò như thế nào đối với cách mạng Việt Nam?",
        options: [
            {
                label: "A",
                text: "Chỉ có ý nghĩa trong đấu tranh giành độc lập dân tộc.",
                correct: false,
            },
            {
                label: "B",
                text: "Là vấn đề chiến lược, có ý nghĩa quyết định thành công của cách mạng.",
                correct: true,
            },
            {
                label: "C",
                text: "Chỉ là biện pháp vận động quần chúng trong thời chiến.",
                correct: false,
            },
            {
                label: "D",
                text: "Chỉ cần thiết khi đất nước gặp khó khăn về kinh tế.",
                correct: false,
            },
        ],
    },
    {
        id: 41,
        question:
            "Theo tư tưởng Hồ Chí Minh, mục tiêu cao nhất của chủ nghĩa xã hội là gì?",
        options: [
            {
                label: "A",
                text: "Phát triển kinh tế bằng mọi giá.",
                correct: false,
            },
            {
                label: "B",
                text: "Tăng cường quyền lực quản lý của bộ máy nhà nước.",
                correct: false,
            },
            {
                label: "C",
                text: "Xây dựng một xã hội chỉ chú trọng phát triển vật chất.",
                correct: false,
            },
            {
                label: "D",
                text: "Không ngừng nâng cao đời sống vật chất và tinh thần của nhân dân, thực hiện mục tiêu độc lập, tự do, hạnh phúc.",
                correct: true,
            },
        ],
    },
    {
        id: 42,
        question:
            "Theo tư tưởng Hồ Chí Minh, văn hóa có vai trò như thế nào đối với sự phát triển của đất nước?",
        options: [
            {
                label: "A",
                text: "Văn hóa chỉ phục vụ hoạt động giải trí.",
                correct: false,
            },
            {
                label: "B",
                text: "Văn hóa chỉ là kết quả của phát triển kinh tế.",
                correct: false,
            },
            {
                label: "C",
                text: "Văn hóa phải soi đường cho quốc dân đi, có vai trò quan trọng đối với sự nghiệp xây dựng và bảo vệ Tổ quốc.",
                correct: true,
            },
            {
                label: "D",
                text: "Văn hóa không có mối liên hệ với chính trị và kinh tế.",
                correct: false,
            },
        ],
    },
];
