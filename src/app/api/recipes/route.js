import connectDB from "@/config/database";
import Recipe from "@/models/Recipe";

export const GET = async (request) => {
  try {
    await connectDB();

    const recipes = await Recipe.find({});

    return new Response(JSON.stringify(recipes), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 500,
    });
  }
};
