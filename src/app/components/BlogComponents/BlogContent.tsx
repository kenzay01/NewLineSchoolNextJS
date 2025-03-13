"use client";
import "./styles/BlogContent.css";
import { blogTitles } from "../../dict/blog";
import BlogItem from "./BlogItem";
import { useEffect, useState } from "react";
export default function BlogContent() {
    const renderBlogItems = blogTitles.map((blog, index) => {
        return <BlogItem key={index} {...blog} />;
    }
    );
    return <div className="blog-content">{renderBlogItems}</div>
}