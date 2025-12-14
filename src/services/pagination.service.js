const paginate = (props) => {
    switch (props.direction) {
        case 'next':
            props.dispatcher(props.offset + 1)
            return;
        case 'prev':
            props.dispatcher(props.offset - 1)
            return;
        default:
            return;
    }
}

export { paginate };