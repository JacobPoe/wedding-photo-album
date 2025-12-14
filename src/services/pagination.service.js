const paginate = (props) => {
    switch (props.direction) {
        case 'next':
            props.updateOffset(props.offset + 1)
            return;
        case 'prev':
            props.updateOffset(props.offset - 1)
            return;
        default:
            return;
    }
}

export { paginate };