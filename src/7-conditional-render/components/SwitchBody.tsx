import React, {useState} from 'react';
import styles from './SwitchBody.module.css'

export type SwitchBodyType = {
    isOn: boolean
    activeOn: () => void
}


export function SwitchBody() {
    const [isOn, setOn] = useState<boolean>(false)
    const onClickHandlerOn = () => {
        setOn(!isOn)
    }

    // const activeOn = () => isOn ? styles.activeOn : ''
    // const activeOff = () => !isOn ? styles.activeOff : ''


    return (
        <div className={styles.switchBody}>
            {/*<div className={styles.switchOn}>*/}
            {/*    <div className={activeOn()} onClick={onClickHandlerOn}>On</div>*/}
            {/*</div>*/}
            {/*<div className={styles.switchOff}>*/}
            {/*    <div className={activeOff()} onClick={onClickHandlerOn}>Off</div>*/}
            {/*</div>*/}

            <div className={styles.switchOn}>
                <button className={isOn ? styles.activeOn : ''} onClick={onClickHandlerOn} disabled={isOn}>On
                </button>
            </div>

            <div className={styles.switchOff}>
                <button className={!isOn ? styles.activeOff : ''} onClick={onClickHandlerOn} disabled={!isOn}>Off
                </button>
            </div>
        </div>
    );
}