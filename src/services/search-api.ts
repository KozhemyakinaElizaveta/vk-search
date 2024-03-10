export const searchUsers = async (query: string) => {
    try {
        console.log(query);
        const response = await fetch(`https://dummyjson.com/users/search?q=${query}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error searching users:', error);
    }
};