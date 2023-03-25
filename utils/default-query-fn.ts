import { QueryFunction, QueryKey } from "@tanstack/react-query";

export const defaultQueryFn: QueryFunction<unknown, QueryKey> = async ({
    queryKey: [url],
}) => {
    if (typeof url === "string") {
        const { data } = await fetch(url).then((response) => response.json());
        return data;
    }

    throw new Error("Invalid QueryKey");
};
