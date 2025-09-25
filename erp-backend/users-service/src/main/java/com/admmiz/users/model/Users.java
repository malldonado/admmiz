package com.admmiz.users.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class Users {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, unique = true)
  private String email;

  @Column(nullable = false)
  private String password;

  //construtor
  public Users() {
      this.email = email;
      this.password = password;
  }

  public Users(String email, String password) {
    this.email = email;
    this.password = password;
  }

  public Long getId() {return id;}


  public void setId(Long id) {
      this.id = id;
  }

  public String getEmail() {
      return email;
  }

  public void setEmail(String email) {
      this.email = email;
  }

  public String getPassword() {
      return password;
  }

  public void setPassword(String password) {
      this.password = password;
  }

}
