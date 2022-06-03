import React from 'react';
import {SwitchBody} from "./SwitchBody";
import styles from './Switch.module.css'

export function Switch() {
    return (
        <div className={styles.switch}>
            <SwitchBody />
        </div>
    );
}