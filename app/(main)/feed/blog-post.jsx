const BlogPost = ({ title, content}) => (
    <div className="max-w-lg mx-auto my-8 p-5 bg-white shadow-lg rounded-lg">
      <div className="px-4 py-2">
        <h2 className="lg:text-2xl text-xl text-center font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 text-lg mb-4 text-justify">{content}</p>
        
      </div>
    </div>
  );
  
  export default BlogPost;