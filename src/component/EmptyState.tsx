import './EmptyState.scss'
const EmptyState = () => {
    return (
        <div className="Empty">
            <div>No exact matches</div>
            <div>Try changing or removing some of your filters.</div>
        </div>
    );
}

export default EmptyState;