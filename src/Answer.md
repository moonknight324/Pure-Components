The Pure Component is showing better functionality as it prevents the unnecessary re-renders. It is comparing the previous and the current state and props by a shallow comparison. It will not re-render if there are no changes.

On the other hand, the simple component is getting rendered every time even if the state and props do not change which decreases the performance improvement.