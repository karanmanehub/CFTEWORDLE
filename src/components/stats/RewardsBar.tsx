import {
    REWARDS
} from '../../constants/strings'
import { REWARD_LIST } from '../../constants/rewardsList'

const RewardItem = ({
    key,
    value,
    def,
}: {
    key?: string
    value?: string
    def?: string
}) => {
    return (
        <div className="items-center justify-center dark:text-white">
            <div className="text-xl">{key} {value}</div>
            <hr className="border-gray-500" />
            <div className="text-lg">{def}</div>
        </div>
    )
}

export const RewardsBar = () => {
    const styles = {
        border: '3px solid',
    };

    const randomNoFromRewardsArr = Math.floor(Math.random() * REWARD_LIST.length);
    const randomRecFromRewardsArr = REWARD_LIST[Math.floor(Math.random() * REWARD_LIST.length)];
    // console.log('No:', randomNoFromRewardsArr);
    // console.log('randomFromRewardsArr:', randomRecFromRewardsArr);
    return (
        <>
            <div className=' font-medium leading-6 text-gray-900 dark:text-gray-100'>
                {REWARDS}
            </div>
            <div style={styles} >
                {/* <div className="text-3xl my-2 flex justify-center"> */}
                {/* </div> */}
                <p className="text-2xl font-medium leading-6 text-gray-900 dark:text-gray-100">
                    <RewardItem value={REWARD_LIST[randomNoFromRewardsArr].value} def={REWARD_LIST[randomNoFromRewardsArr].def} />
                </p>
            </div>
        </>
    )
}
