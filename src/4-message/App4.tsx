import React from 'react';
import {Message} from "./components/Message";


export function App4() {
    const messageTime = new Date().toLocaleTimeString();
    return (
        <div>
            <Message
                nickname={"Vova"}
                messageText={"Идейные соображения высшего порядка, а также постоянное информационно-пропогандистское обеспечение нашей деятельности требует определения и уточнения поставленных обществом и правительством задач."}
                avatarLink={"https://ak.picdn.net/contributors/190259532/avatars/thumb.jpg"}
                messageTime={messageTime}
            />

            <Message
                nickname={"Kolya"}
                messageText={"Следует отметить, что выбранный нами инновационный путь требует определения и уточнения направлений прогрессивного развития. Равным образом выбранный нами инновационный путь обеспечивает актуальность поэтапного и последовательного развития общества."}
                avatarLink={"https://i.gifer.com/P9yG.gif"}
                messageTime={messageTime}/>
        </div>
    )
}