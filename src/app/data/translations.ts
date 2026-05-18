export const translations = {
  en: {
    landing: {
      badge: "Visual Psychology Test",
      title: "What Do You See First?",
      subtitle: "Discover your hidden personality through visual perception",
      description: "Your brain reveals patterns about who you are. Take this 6-question visual illusion test to uncover your unique traits.",
      startButton: "Start the Test",
      stats: {
        questions: "6 Questions",
        time: "2 Minutes",
        science: "Science-Based"
      }
    },
    quiz: {
      question: "What do you see first?",
      instinct: "Trust your instinct",
      questionCounter: "Question"
    },
    results: {
      badge: "Your Results",
      profileTitle: "Personality Profile",
      strengthsTitle: "Your Strengths",
      insightTitle: "Personal Insight",
      shareButton: "Share Results",
      retakeButton: "Take Again"
    }
  },
  vi: {
    landing: {
      badge: "Bài Test Tâm Lý Hình Ảnh",
      title: "Bạn Nhìn Thấy Gì Đầu Tiên?",
      subtitle: "Khám phá tính cách ẩn giấu qua nhận thức thị giác",
      description: "Bộ não của bạn tiết lộ những mẫu hình về con người bạn. Làm bài test ảo giác thị giác 6 câu hỏi này để khám phá đặc điểm độc đáo của bạn.",
      startButton: "Bắt Đầu Test",
      stats: {
        questions: "6 Câu Hỏi",
        time: "2 Phút",
        science: "Dựa Trên Khoa Học"
      }
    },
    quiz: {
      question: "Bạn nhìn thấy gì đầu tiên?",
      instinct: "Hãy tin vào trực giác của bạn",
      questionCounter: "Câu hỏi"
    },
    results: {
      badge: "Kết Quả Của Bạn",
      profileTitle: "Biểu Đồ Tính Cách",
      strengthsTitle: "Điểm Mạnh Của Bạn",
      insightTitle: "Nhận Định Cá Nhân",
      shareButton: "Chia Sẻ Kết Quả",
      retakeButton: "Làm Lại"
    }
  }
};

export const questionData = {
  en: [
    {
      id: 1,
      options: [
        {
          text: "A Man",
          trait: "analytical",
          description: "Strong character, persistence, and confidence"
        },
        {
          text: "A Woman",
          trait: "creative",
          description: "Gentle character, creativity, and unconventional thinking"
        }
      ]
    },
    {
      id: 2,
      options: [
        {
          text: "A Crocodile",
          trait: "practical",
          description: "Practical person who doesn't like to take risks"
        },
        {
          text: "A Boat",
          trait: "detailOriented",
          description: "Creative and unique, attention to nuances"
        }
      ]
    },
    {
      id: 3,
      options: [
        {
          text: "Two Profiles",
          trait: "detailFocused",
          description: "Like to look into details"
        },
        {
          text: "A Candlestick",
          trait: "bigPicture",
          description: "See the whole picture"
        }
      ]
    },
    {
      id: 4,
      options: [
        {
          text: "A Human Face",
          trait: "cautious",
          description: "Fear of making mistakes"
        },
        {
          text: "Person in Boat",
          trait: "anxious",
          description: "Deep thinker about life"
        }
      ]
    },
    {
      id: 5,
      options: [
        {
          text: "Red Pepper",
          trait: "introverted",
          description: "Prefer solitude and quiet"
        },
        {
          text: "Women's Shoe",
          trait: "extroverted",
          description: "Life of the party"
        }
      ]
    },
    {
      id: 6,
      options: [
        {
          text: "A Crow",
          trait: "stressed",
          description: "Need rest and recharge"
        },
        {
          text: "A Head",
          trait: "balanced",
          description: "Mentally balanced"
        }
      ]
    }
  ],
  vi: [
    {
      id: 1,
      options: [
        {
          text: "Một Người Đàn Ông",
          trait: "analytical",
          description: "Tính cách mạnh mẽ, kiên trì và tự tin"
        },
        {
          text: "Một Người Phụ Nữ",
          trait: "creative",
          description: "Nhân cách dịu dàng, sáng tạo và tư duy độc đáo"
        }
      ]
    },
    {
      id: 2,
      options: [
        {
          text: "Con Cá Sấu",
          trait: "practical",
          description: "Người thực tế, không thích mạo hiểm"
        },
        {
          text: "Chiếc Thuyền",
          trait: "detailOriented",
          description: "Sáng tạo, độc đáo, chú ý đến chi tiết"
        }
      ]
    },
    {
      id: 3,
      options: [
        {
          text: "Hai Khuôn Mặt",
          trait: "detailFocused",
          description: "Thích đi vào chi tiết"
        },
        {
          text: "Cây Nến",
          trait: "bigPicture",
          description: "Nhìn toàn cảnh tổng thể"
        }
      ]
    },
    {
      id: 4,
      options: [
        {
          text: "Khuôn Mặt Con Người",
          trait: "cautious",
          description: "Sợ mắc sai lầm"
        },
        {
          text: "Người Trên Thuyền",
          trait: "anxious",
          description: "Suy nghĩ sâu sắc về cuộc sống"
        }
      ]
    },
    {
      id: 5,
      options: [
        {
          text: "Ớt Đỏ",
          trait: "introverted",
          description: "Thích sự yên tĩnh và cô đơn"
        },
        {
          text: "Giày Cao Gót",
          trait: "extroverted",
          description: "Trung tâm của bữa tiệc"
        }
      ]
    },
    {
      id: 6,
      options: [
        {
          text: "Con Quạ",
          trait: "stressed",
          description: "Cần nghỉ ngơi và nạp lại năng lượng"
        },
        {
          text: "Cái Đầu",
          trait: "balanced",
          description: "Cân bằng tinh thần"
        }
      ]
    }
  ]
};

export const personalityProfiles = {
  en: {
    analytical: {
      title: "You see a man",
      description: "This result in the test indicates a strong character, persistence, and confidence. This person is not accustomed to doubting himself and his actions; he analyses everything and makes only measured and rational decisions.",
      fullDescription: "You possess a methodical approach to life that serves you well. Your ability to analyze situations thoroughly before acting is one of your greatest strengths. You trust in logic and reason, which helps you navigate complex challenges with clarity and purpose.",
      strengths: ["Strong decision-making", "Rational thinking", "Self-confidence"],
      insights: "Your analytical nature combined with confidence creates a powerful foundation for success. Continue to trust your judgment while remaining open to intuitive insights that can complement your logical approach."
    },
    creative: {
      title: "You see a woman",
      description: "This result suggests a gentle character, creativity, and unconventional thinking. Such people can boast of good abstract thinking, rich imagination, and a subtle perception of art.",
      fullDescription: "Your mind naturally gravitates toward the artistic and innovative. You possess a rich imagination that allows you to see beauty and possibility where others might not. Your unconventional thinking is a gift that enables you to approach problems from unique angles.",
      strengths: ["Abstract thinking", "Rich imagination", "Artistic perception"],
      insights: "Your creative nature is a rare and valuable trait. Embrace your unconventional thinking while finding practical ways to bring your imaginative ideas into reality. Balance creativity with structure for maximum impact."
    },
    practical: {
      title: "You see a crocodile",
      description: "You can be a little careless and inattentive to details by nature. Moreover, you are a practical person who doesn't like to take risks.",
      fullDescription: "You prefer the tried and true over the uncertain. Your practical nature keeps you grounded and helps you make safe, reliable choices. While you may sometimes overlook small details, you excel at seeing what works in the real world.",
      strengths: ["Practical mindset", "Risk awareness", "Realistic outlook"],
      insights: "Your practical approach protects you from unnecessary risks. Consider developing attention to detail while maintaining your grounded perspective. Sometimes calculated risks can lead to growth."
    },
    detailOriented: {
      title: "You see a boat",
      description: "You like nuances and slightly visible details. You prefer to stand out of the crowd as well as be a creative and unique person. Anyway, try to picture the world as a holistic thing, and don't waste your time on the meaningless details.",
      fullDescription: "You have an exceptional ability to notice what others miss. Your attention to subtle details combined with creative flair makes you stand out. You don't just see things—you see the intricate beauty in everything around you.",
      strengths: ["Attention to nuances", "Creative uniqueness", "Precision"],
      insights: "Your ability to appreciate details is a gift, but remember to occasionally step back and see the bigger picture. Try to balance your focus on details with holistic thinking to avoid getting lost in meaningless minutiae."
    },
    detailFocused: {
      title: "You see two profiles",
      description: "You like to look into the details. You prefer to run away from problems when you encounter them face to face.",
      fullDescription: "You are someone who values careful examination and prefers to avoid direct confrontation. Your detail-oriented nature helps you prepare thoroughly, though you may sometimes hesitate when challenges arise.",
      strengths: ["Careful analysis", "Thorough preparation", "Risk awareness"],
      insights: "Your attention to detail is valuable, but don't let it paralyze you when facing challenges. Sometimes problems need to be confronted directly. Use your analytical skills to prepare, then take action with confidence."
    },
    bigPicture: {
      title: "You see a candlestick",
      description: "You are the one who'd rather take a couple of steps back in order to see the whole picture. You always gather information and study a situation thoroughly before getting close to a problem and starting to solve it.",
      fullDescription: "Your ability to see the forest instead of just the trees is remarkable. You understand that perspective matters, and you take the time to gather comprehensive information before making decisions. This strategic approach serves you well in complex situations.",
      strengths: ["Holistic thinking", "Strategic planning", "Comprehensive analysis"],
      insights: "Your big-picture thinking is a powerful asset. Continue to maintain this perspective while ensuring you don't miss critical details that could impact your strategies. Balance breadth with depth for optimal results."
    },
    cautious: {
      title: "You see a human face",
      description: "You are very afraid to do something wrong. So much so that you are ready to turn back halfway to the coveted goal if it suddenly seems that failure awaits ahead. The fear of making a mistake prevents you from moving forward, achieving what you want.",
      fullDescription: "Your high standards and fear of failure can sometimes hold you back from achieving your full potential. While being careful is valuable, excessive caution may prevent you from taking necessary steps toward your goals.",
      strengths: ["High standards", "Careful consideration", "Quality focus"],
      insights: "Remember that mistakes are part of growth and learning. Your fear of doing something wrong, while understandable, may be limiting your potential. Practice self-compassion and recognize that some risks are worth taking. Failure is not the opposite of success—it's part of the journey."
    },
    anxious: {
      title: "You see a person in a boat",
      description: "The constantly tormenting thought is the fear of death. Not only for yourself, but also for your loved ones. You often think that something irreparable is about to happen, and this paralyzes you. Death is the inevitable outcome of human life. But existence with constant thoughts about it is real torture.",
      fullDescription: "You carry deep thoughts about mortality and the fragility of life. While this awareness can be burdensome, it also reflects a profound sensitivity and love for those around you. Your consciousness of life's temporary nature can be both a weight and a reminder to cherish each moment.",
      strengths: ["Deep empathy", "Awareness", "Emotional depth"],
      insights: "While death is indeed inevitable, dwelling on it constantly prevents you from fully living. Consider focusing on what you can control—making meaningful connections, creating positive memories, and living with purpose. Your awareness of mortality can motivate you to live more fully rather than paralyze you. Seek support if these thoughts become overwhelming."
    },
    introverted: {
      title: "You see red pepper",
      description: "This response in the test indicates that sociability is not your strong suit. You've managed to build relationships with people, both colleagues and friends, but deep down, you remain a lone wolf. If given the opportunity, you would retreat and isolate yourself for a long time without hesitation. When given the choice, you would prefer a quiet evening with a book on the couch or a trip out of town where no one would disturb you over a noisy gathering.",
      fullDescription: "You are comfortable in your own company and find peace in solitude. While you can navigate social situations successfully, your true comfort zone is in quiet, private spaces where you can recharge and reflect. This is not a weakness—it's how you're wired.",
      strengths: ["Self-sufficiency", "Deep reflection", "Inner peace"],
      insights: "Your introverted nature is a strength, not a flaw. Honor your need for solitude while maintaining the relationships that matter to you. Quality over quantity applies to both your social life and your alone time. Find the balance that works for you."
    },
    extroverted: {
      title: "You see red women's shoe",
      description: "You have no problems with sociability and communication in general. Interacting with new people poses no difficulties for you - everyone feels as if they've known you for ages in your presence. Being the life of the party is your second nature, and you take great pride in it. Sometimes, in an effort to seem even more outgoing than you are, you cross the line and start behaving foolishly, and you talk a little more than you should",
      fullDescription: "Your natural charisma and social ease make you a magnet for others. You thrive in social settings and have a gift for making people feel comfortable. However, your enthusiasm can sometimes lead you to overextend yourself or dominate conversations.",
      strengths: ["Natural charisma", "Communication skills", "Social confidence"],
      insights: "Your social gifts are wonderful, but remember that listening can be as powerful as speaking. Be mindful of the line between being engaging and being overwhelming. Sometimes less is more. Practice balancing your outgoing nature with moments of quiet presence and active listening."
    },
    stressed: {
      title: "You see a crow",
      description: "This response is given by people who are in a bad mood. Think about what oppresses you and how to fix the situation. Perhaps you are very tired and need a long rest. You need a reboot and change of scenery. This will help reassess life goals and restore energy for further activities.",
      fullDescription: "You are currently experiencing a period of exhaustion or low mood. This is not your permanent state—it's a signal from your mind and body that you need to pause and recharge. Your current stress or fatigue is affecting your perception and well-being.",
      strengths: ["Self-awareness", "Recognition of needs", "Openness to change"],
      insights: "Listen to what your mind is telling you. You genuinely need rest, a change of environment, or a shift in your routine. This is not weakness—it's wisdom. Take time to identify what's draining you and make concrete plans for restoration. A reboot isn't a luxury; it's a necessity for your well-being and effectiveness."
    },
    balanced: {
      title: "You see a head",
      description: "This result characterizes a person as stress-resistant and mentally balanced. You are in balance and resourceful, not prone to hysterics or uncontrollable behaviour. Without a significant reason, it is difficult to upset you or make you nervous.",
      fullDescription: "You possess remarkable emotional equilibrium. Your stress resistance and mental balance allow you to navigate life's challenges with grace and composure. You remain resourceful under pressure and don't easily lose your cool.",
      strengths: ["Stress resistance", "Emotional stability", "Resourcefulness"],
      insights: "Your balanced state is both a gift and an achievement. Maintain this equilibrium by continuing whatever practices have brought you here. Your calm presence can be a stabilizing force for others. Use your strength to support those who struggle with balance while protecting your own peace."
    }
  },
  vi: {
    analytical: {
      title: "Nhà Phân Tích Tự Tin",
      description: "Kết quả này cho thấy một tính cách mạnh mẽ, kiên trì và tự tin. Bạn không quen với việc nghi ngờ bản thân và hành động của mình. Bạn phân tích mọi thứ và chỉ đưa ra những quyết định có cân nhắc và hợp lý.",
      fullDescription: "Bạn có cách tiếp cận có phương pháp với cuộc sống giúp bạn thành công. Khả năng phân tích tình huống một cách kỹ lưỡng trước khi hành động là một trong những điểm mạnh lớn nhất của bạn. Bạn tin vào logic và lý trí, điều này giúp bạn vượt qua những thách thức phức tạp với sự rõ ràng và mục đích.",
      strengths: ["Ra quyết định mạnh mẽ", "Tư duy lý trí", "Tự tin"],
      insights: "Bản chất phân tích kết hợp với sự tự tin tạo nên nền tảng vững chắc cho thành công của bạn. Hãy tiếp tục tin vào đánh giá của mình trong khi vẫn mở lòng với những trực giác có thể bổ sung cho cách tiếp cận logic của bạn."
    },
    creative: {
      title: "Nhà Tư Duy Sáng Tạo",
      description: "Kết quả này cho thấy một tính cách dịu dàng, sáng tạo và tư duy độc đáo. Bạn có thể tự hào về tư duy trừu tượng tốt, trí tưởng tượng phong phú và khả năng cảm nhận nghệ thuật tinh tế.",
      fullDescription: "Tâm trí của bạn tự nhiên hướng tới nghệ thuật và đổi mới. Bạn có trí tưởng tượng phong phú cho phép bạn nhìn thấy vẻ đẹp và khả năng ở nơi người khác không thể. Tư duy độc đáo của bạn là món quà giúp bạn tiếp cận vấn đề từ những góc độ đặc biệt.",
      strengths: ["Tư duy trừu tượng", "Trí tưởng tượng phong phú", "Cảm nhận nghệ thuật"],
      insights: "Bản chất sáng tạo của bạn là một đặc điểm quý hiếm và có giá trị. Hãy đón nhận tư duy độc đáo của mình trong khi tìm cách thực tế để biến những ý tưởng giàu trí tưởng tượng thành hiện thực. Cân bằng sự sáng tạo với cấu trúc để đạt hiệu quả tối đa."
    },
    practical: {
      title: "Người Thực Tế",
      description: "Bạn có thể hơi bất cẩn và không chú ý đến chi tiết theo bản chất. Hơn nữa, bạn là người thực tế không thích mạo hiểm.",
      fullDescription: "Bạn thích những gì đã được thử nghiệm và chứng minh hơn là điều không chắc chắn. Bản chất thực tế giúp bạn giữ vững lập trường và đưa ra những lựa chọn an toàn, đáng tin cậy. Mặc dù đôi khi bạn có thể bỏ qua những chi tiết nhỏ, nhưng bạn xuất sắc trong việc nhìn thấy điều gì có hiệu quả trong thế giới thực.",
      strengths: ["Tư duy thực tế", "Nhận thức rủi ro", "Quan điểm thực tế"],
      insights: "Cách tiếp cận thực tế của bạn bảo vệ bạn khỏi những rủi ro không cần thiết. Hãy cân nhắc phát triển sự chú ý đến chi tiết trong khi duy trì quan điểm có căn cứ của mình. Đôi khi những rủi ro được tính toán có thể dẫn đến sự phát triển."
    },
    detailOriented: {
      title: "Người Tinh Tế Chi Tiết",
      description: "Bạn thích những sắc thái và chi tiết nhỏ nhẹ nhàng. Bạn thích nổi bật giữa đám đông cũng như là một người sáng tạo và độc đáo.",
      fullDescription: "Bạn có khả năng đặc biệt để nhận thấy những gì người khác bỏ lỡ. Sự chú ý đến chi tiết tinh tế kết hợp với nét sáng tạo khiến bạn nổi bật. Bạn không chỉ nhìn thấy mọi thứ—bạn nhìn thấy vẻ đẹp phức tạp trong mọi thứ xung quanh.",
      strengths: ["Chú ý đến sắc thái", "Sự độc đáo sáng tạo", "Chính xác"],
      insights: "Khả năng đánh giá cao chi tiết của bạn là một món quà, nhưng hãy nhớ thỉnh thoảng lùi lại và nhìn bức tranh tổng thể. Cố gắng cân bằng sự tập trung vào chi tiết với tư duy toàn diện để tránh bị lạc trong những chi tiết vô nghĩa."
    },
    detailFocused: {
      title: "Người Quan Sát Cẩn Thận",
      description: "Bạn thích đi vào chi tiết. Bạn thích chạy trốn khỏi vấn đề khi gặp chúng trực diện.",
      fullDescription: "Bạn là người đánh giá cao sự kiểm tra cẩn thận và thích tránh đối đầu trực tiếp. Bản chất hướng đến chi tiết giúp bạn chuẩn bị kỹ lưỡng, mặc dù đôi khi bạn có thể do dự khi thách thức xuất hiện.",
      strengths: ["Phân tích cẩn thận", "Chuẩn bị kỹ lưỡng", "Nhận thức rủi ro"],
      insights: "Sự chú ý đến chi tiết của bạn có giá trị, nhưng đừng để nó làm bạn tê liệt khi đối mặt với thách thức. Đôi khi vấn đề cần được đối đầu trực tiếp. Sử dụng kỹ năng phân tích của bạn để chuẩn bị, sau đó hành động với tự tin."
    },
    bigPicture: {
      title: "Nhà Hoạch Định Chiến Lược",
      description: "Bạn là người thà lùi lại vài bước để nhìn toàn cảnh. Bạn luôn thu thập thông tin và nghiên cứu tình huống kỹ lưỡng trước khi tiếp cận vấn đề và bắt đầu giải quyết nó.",
      fullDescription: "Khả năng nhìn thấy khu rừng thay vì chỉ những cái cây của bạn thật đáng chú ý. Bạn hiểu rằng quan điểm quan trọng, và bạn dành thời gian để thu thập thông tin toàn diện trước khi đưa ra quyết định. Cách tiếp cận chiến lược này phục vụ bạn tốt trong các tình huống phức tạp.",
      strengths: ["Tư duy toàn diện", "Hoạch định chiến lược", "Phân tích toàn diện"],
      insights: "Tư duy bức tranh lớn của bạn là tài sản mạnh mẽ. Tiếp tục duy trì quan điểm này trong khi đảm bảo bạn không bỏ lỡ những chi tiết quan trọng có thể ảnh hưởng đến chiến lược của bạn. Cân bằng giữa chiều rộng và chiều sâu để có kết quả tối ưu."
    },
    cautious: {
      title: "Người Hoàn Hảo Chủ Nghĩa Suy Nghĩ",
      description: "Bạn rất sợ làm sai điều gì đó. Đến mức bạn sẵn sàng quay đầu giữa chừng đến mục tiêu đang mơ ước nếu đột nhiên có vẻ như thất bại đang chờ đợi phía trước. Nỗi sợ mắc sai lầm ngăn cản bạn tiến lên, đạt được điều bạn muốn.",
      fullDescription: "Tiêu chuẩn cao và nỗi sợ thất bại của bạn đôi khi có thể kìm hãm bạn khỏi việc đạt được tiềm năng đầy đủ của mình. Mặc dù cẩn thận là có giá trị, nhưng thận trọng quá mức có thể ngăn bạn thực hiện các bước cần thiết để đạt được mục tiêu.",
      strengths: ["Tiêu chuẩn cao", "Cân nhắc cẩn thận", "Tập trung chất lượng"],
      insights: "Hãy nhớ rằng sai lầm là một phần của sự phát triển và học hỏi. Nỗi sợ làm sai điều gì đó của bạn, mặc dù dễ hiểu, có thể đang hạn chế tiềm năng của bạn. Hãy thực hành lòng tự trắc ẩn và nhận ra rằng một số rủi ro đáng để thử. Thất bại không phải là điều ngược lại của thành công—nó là một phần của hành trình."
    },
    anxious: {
      title: "Tâm Hồn Suy Tư Sâu Sắc",
      description: "Ý nghĩ hành hạ liên tục là nỗi sợ cái chết. Không chỉ cho bản thân bạn, mà còn cho những người thân yêu của bạn. Bạn thường nghĩ rằng điều gì đó không thể khắc phục sắp xảy ra, và điều này làm bạn tê liệt. Cái chết là kết cục không thể tránh khỏi của cuộc đời con người. Nhưng tồn tại với những suy nghĩ liên tục về nó là sự tra tấn thực sự.",
      fullDescription: "Bạn mang những suy nghĩ sâu sắc về sự chết và sự mong manh của cuộc sống. Mặc dù nhận thức này có thể là gánh nặng, nó cũng phản ánh sự nhạy cảm sâu sắc và tình yêu thương với những người xung quanh. Ý thức về bản chất tạm thời của cuộc sống có thể vừa là gánh nặng vừa là lời nhắc nhở trân trọng từng khoảnh khắc.",
      strengths: ["Cảm thông sâu sắc", "Nhận thức", "Chiều sâu cảm xúc"],
      insights: "Mặc dù cái chết thực sự không thể tránh khỏi, nhưng việc suy nghĩ về nó liên tục ngăn bạn sống trọn vẹn. Hãy cân nhắc tập trung vào những gì bạn có thể kiểm soát—tạo ra những kết nối ý nghĩa, tạo ra những kỷ niệm tích cực và sống với mục đích. Nhận thức về sự chết của bạn có thể thúc đẩy bạn sống trọn vẹn hơn thay vì làm bạn tê liệt. Hãy tìm kiếm sự hỗ trợ nếu những suy nghĩ này trở nên quá tải."
    },
    introverted: {
      title: "Người Cô Đơn Mãn Nguyện",
      description: "Phản ứng này cho thấy rằng khả năng giao tiếp không phải là điểm mạnh của bạn. Bạn đã xây dựng được mối quan hệ với mọi người, cả đồng nghiệp và bạn bè, nhưng sâu thẳm, bạn vẫn là một con sói đơn độc. Nếu có cơ hội, bạn sẽ rút lui và cô lập bản thân trong thời gian dài mà không do dự. Khi được lựa chọn, bạn sẽ thích một buổi tối yên tĩnh với một cuốn sách trên ghế sofa hoặc một chuyến đi ngoại ô nơi không ai làm phiền bạn hơn là một buổi tụ họp ồn ào.",
      fullDescription: "Bạn thoải mái khi ở một mình và tìm thấy sự bình yên trong cô đơn. Mặc dù bạn có thể điều hướng các tình huống xã hội thành công, nhưng vùng thoải mái thực sự của bạn là trong những không gian yên tĩnh, riêng tư nơi bạn có thể nạp lại năng lượng và suy ngẫm. Đây không phải là điểm yếu—đó là cách bạn được tạo ra.",
      strengths: ["Tự lập", "Suy ngẫm sâu sắc", "Bình an nội tâm"],
      insights: "Bản chất hướng nội của bạn là một điểm mạnh, không phải khuyết điểm. Hãy tôn trọng nhu cầu về sự cô đơn của bạn trong khi duy trì những mối quan hệ quan trọng với bạn. Chất lượng hơn số lượng áp dụng cho cả cuộc sống xã hội và thời gian một mình của bạn. Tìm sự cân bằng phù hợp với bạn."
    },
    extroverted: {
      title: "Bướm Xã Hội",
      description: "Bạn không có vấn đề gì với khả năng giao tiếp và giao tiếp nói chung. Tương tác với người mới không gặp khó khăn gì đối với bạn—mọi người cảm thấy như thể họ đã biết bạn từ lâu khi ở bên bạn. Trở thành tâm điểm của bữa tiệc là bản chất thứ hai của bạn, và bạn rất tự hào về điều đó. Đôi khi, trong nỗ lực có vẻ hướng ngoại hơn bạn thực sự, bạn vượt qua ranh giới và bắt đầu cư xử ngớ ngẩn, và bạn nói nhiều hơn bạn nên.",
      fullDescription: "Sức hút tự nhiên và sự thoải mái xã hội của bạn khiến bạn trở thành nam châm với người khác. Bạn phát triển mạnh trong các môi trường xã hội và có tài năng làm cho mọi người cảm thấy thoải mái. Tuy nhiên, sự nhiệt tình của bạn đôi khi có thể khiến bạn vượt quá giới hạn hoặc thống trị các cuộc trò chuyện.",
      strengths: ["Sức hút tự nhiên", "Kỹ năng giao tiếp", "Tự tin xã hội"],
      insights: "Món quà xã hội của bạn thật tuyệt vời, nhưng hãy nhớ rằng lắng nghe có thể mạnh mẽ như nói. Hãy chú ý đến ranh giới giữa việc hấp dẫn và áp đảo. Đôi khi ít hơn là nhiều hơn. Hãy thực hành cân bằng bản chất hướng ngoại của bạn với những khoảnh khắc hiện diện yên tĩnh và lắng nghe tích cực."
    },
    stressed: {
      title: "Người Cần Nghỉ Ngơi",
      description: "Phản ứng này được đưa ra bởi những người đang trong tâm trạng tồi. Hãy suy nghĩ về điều gì áp bức bạn và cách khắc phục tình huống. Có lẽ bạn rất mệt mỏi và cần nghỉ ngơi dài hạn. Bạn cần một sự khởi động lại và thay đổi bối cảnh. Điều này sẽ giúp đánh giá lại mục tiêu cuộc sống và khôi phục năng lượng cho các hoạt động tiếp theo.",
      fullDescription: "Bạn hiện đang trải qua một giai đoạn kiệt sức hoặc tâm trạng thấp. Đây không phải là trạng thái vĩnh viễn của bạn—đó là tín hiệu từ tâm trí và cơ thể của bạn rằng bạn cần tạm dừng và nạp lại năng lượng. Căng thẳng hoặc mệt mỏi hiện tại của bạn đang ảnh hưởng đến nhận thức và sức khỏe của bạn.",
      strengths: ["Tự nhận thức", "Nhận biết nhu cầu", "Cởi mở với thay đổi"],
      insights: "Hãy lắng nghe những gì tâm trí của bạn đang nói với bạn. Bạn thực sự cần nghỉ ngơi, thay đổi môi trường hoặc thay đổi thói quen của mình. Đây không phải là điểm yếu—đó là sự khôn ngoan. Hãy dành thời gian để xác định những gì đang làm bạn kiệt sức và lập kế hoạch cụ thể cho sự phục hồi. Khởi động lại không phải là xa xỉ; đó là điều cần thiết cho sức khỏe và hiệu quả của bạn."
    },
    balanced: {
      title: "Tâm Trí Cân Bằng",
      description: "Kết quả này đặc trưng cho một người chống chịu căng thẳng và cân bằng tinh thần. Bạn đang ở trong trạng thái cân bằng và tháo vát, không dễ bị hoảng loạn hoặc hành vi mất kiểm soát. Nếu không có lý do quan trọng, rất khó để làm bạn khó chịu hoặc lo lắng.",
      fullDescription: "Bạn sở hữu sự cân bằng cảm xúc đáng chú ý. Khả năng chống chịu căng thẳng và cân bằng tinh thần cho phép bạn vượt qua những thách thức của cuộc sống với sự duyên dáng và bình tĩnh. Bạn vẫn tháo vát dưới áp lực và không dễ dàng mất bình tĩnh.",
      strengths: ["Chống chịu căng thẳng", "Ổn định cảm xúc", "Tháo vát"],
      insights: "Trạng thái cân bằng của bạn vừa là một món quà vừa là một thành tựu. Duy trì sự cân bằng này bằng cách tiếp tục bất cứ thực hành nào đã đưa bạn đến đây. Sự hiện diện bình tĩnh của bạn có thể là lực lượng ổn định cho người khác. Sử dụng sức mạnh của bạn để hỗ trợ những người đấu tranh với sự cân bằng trong khi bảo vệ sự bình yên của chính bạn."
    }
  }
};
